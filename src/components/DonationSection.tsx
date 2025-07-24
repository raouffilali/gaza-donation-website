import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CreditCard, Shield, Users, Info, X } from "lucide-react";
import { ChargilyClient } from "@chargily/chargily-pay";
import toast from "react-hot-toast";
import { useRecaptcha } from "../hooks/useRecaptcha";

const DonationSection: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("500");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [donationType, setDonationType] = useState<
    "anonymous" | "with-credentials" | null
  >(null);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const { executeRecaptcha } = useRecaptcha();

  const predefinedAmounts = [
    500, 1000, 2000, 5000, 8000, 10000, 20000, 50000, 100000,
  ];

  // Initialize Chargily client
  const client = new ChargilyClient({
    api_key: import.meta.env.VITE_CHARGILY_API_KEY,
    mode: import.meta.env.VITE_CHARGILY_MODE,
  });

  const handleAmountSelect = (amount: number) => {
    // If the same amount is clicked again, unselect it (toggle behavior)
    if (selectedAmount === amount) {
      setSelectedAmount(null);
    } else {
      setSelectedAmount(amount);
      setCustomAmount(""); // Clear custom amount when predefined is selected
    }
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    // Clear predefined amount when user types custom amount
    if (value.trim() !== "") {
      setSelectedAmount(null);
    }
  };

  const getCurrentAmount = (): number => {
    if (customAmount) return parseInt(customAmount);
    if (selectedAmount) return selectedAmount;
    return 0;
  };

  const handleDonation = async () => {
    const amount = getCurrentAmount();

    if (amount < 500) {
      toast.error("الحد الأدنى للتبرع هو 500 دج");
      return;
    }

    if (!donationType) {
      toast.error("يرجى اختيار نوع التبرع (مجهول أو بالبيانات)");
      return;
    }

    if (donationType === "with-credentials" && !donorInfo.name) {
      toast.error("يرجى ملء الاسم");
      return;
    }

    setIsLoading(true);

    try {
      // Execute reCAPTCHA before processing donation
      const recaptchaToken = await executeRecaptcha("donation");

      // Create customer with appropriate data based on donation type
      const customerData =
        donationType === "anonymous"
          ? {
              name: "متبرع مجهول",
              email: `anonymous_${Date.now()}@oulama19-foundation.online`,
              address: {
                country: "DZ",
                state: "Gaza",
                address: "Palestine",
              },
              metadata: {
                donation_type: "gaza_support_anonymous",
                source: "website",
                recaptcha_token: recaptchaToken,
              },
            }
          : {
              name: donorInfo.name,
              email:
                donorInfo.email ||
                `${donorInfo.name
                  .replace(/\s+/g, "_")
                  .toLowerCase()}_${Date.now()}@oulama19-foundation.online`,
              phone: donorInfo.phone || undefined,
              address: {
                country: "DZ",
                state: "Gaza",
                address: "Palestine",
              },
              metadata: {
                donation_type: "gaza_support",
                source: "website",
                recaptcha_token: recaptchaToken,
                has_email: donorInfo.email ? "true" : "false",
              },
            };

      const customer = await client.createCustomer(customerData);

      // Create product for donation
      const product = await client.createProduct({
        name: "تبرع لدعم غزة",
        description: `تبرع  بقيمة ${amount} دج لدعم مهمتنا الإنسانية في غزة`,
        metadata: {
          type: "gaza_donation",
          amount: amount.toString(),
          purpose: "humanitarian_aid",
        },
      });

      // Create price
      const price = await client.createPrice({
        amount: amount,
        currency: "dzd",
        product_id: product.id,
        metadata: {
          donation_amount: amount.toString(),
          purpose: "gaza_support",
        },
      });

      // Create checkout
      const checkout = await client.createCheckout({
        items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
        customer_id: customer.id,
        success_url: `${window.location.origin}/success`,
        failure_url: `${window.location.origin}/failure`,
        payment_method: "edahabia",
        locale: "ar",
        pass_fees_to_customer: false,
        metadata: {
          donor_name:
            donationType === "anonymous" ? "متبرع مجهول" : donorInfo.name,
          donor_email:
            donationType === "anonymous"
              ? "anonymous@oulama19-foundation.online"
              : donorInfo.email ||
                `${donorInfo.name
                  .replace(/\s+/g, "_")
                  .toLowerCase()}_noemail@oulama19-foundation.online`,
          donation_amount: amount.toString(),
          campaign: "gaza_website_donation",
          purpose: "humanitarian_aid_gaza",
          donation_type: donationType,
          has_email:
            donationType === "anonymous"
              ? "anonymous"
              : donorInfo.email
              ? "true"
              : "false",
          recaptcha_token: recaptchaToken,
        },
      });

      // Redirect to payment
      if (checkout.checkout_url) {
        window.location.href = checkout.checkout_url;
      } else {
        throw new Error("Failed to create checkout URL");
      }
    } catch (error) {
      console.error("Donation error:", error);
      toast.error("فشل في معالجة التبرع. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="donate"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <Heart
                className="h-16 w-16 text-rose-500 mx-auto mb-6"
                fill="currentColor"
              />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              ادعم <span className="text-rose-500">غزة</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              كرمك يمكن أن يغير الحياة. كل تبرع، مهما كان حجمه، يساعدنا في
              مواصلة مهمتنا لتقديم الأمل والدعم لأهلنا في غزة.
            </p>

            {/* How to Use Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoDialogOpen(true)}
              className="relative inline-flex items-center px-8 py-3 rounded-full font-semibold text-white overflow-hidden group transition-all duration-300 hover:shadow-2xl"
              style={{
                background:
                  "linear-gradient(45deg, #f43f5e, #ec4899, #8b5cf6, #3b82f6)",
                backgroundSize: "400% 400%",
                animation: "gradientShift 5s ease infinite",
              }}
            >
              <Info className="h-5 w-5  text-white animate-pulse" />
              <span className="relative z-10 mr-2 ">
                كيفية استخدام المنصة للتبرع
              </span>

              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                }}
              />
            </motion.button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-reverse">
                <CreditCard className="h-6 w-6 ml-2 text-rose-500" />
                اختر مبلغ التبرع
              </h3>

              {/* Predefined Amounts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {predefinedAmounts.map((amount) => (
                  <motion.button
                    key={amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-3 rounded-xl font-semibold transition-all ${
                      selectedAmount === amount
                        ? "bg-rose-500 text-white shadow-lg"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {amount.toLocaleString()} دج
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  أو أدخل مبلغًا مخصصًا (الحد الأدنى 500 دج)
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  placeholder="أدخل المبلغ بالدينار"
                  min="500"
                  className={`w-full p-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 border transition-colors ${
                    customAmount && parseInt(customAmount) < 500
                      ? "border-orange-500 focus:border-orange-500"
                      : "border-gray-600 focus:border-rose-500"
                  } focus:outline-none focus:bg-gray-800/70`}
                />
                {customAmount && parseInt(customAmount) < 500 && (
                  <p className="text-red-500 text-sm mt-2">
                    المبلغ يجب أن يكون 500 دج أو أكثر.
                  </p>
                )}
              </div>

              {/* Donation Type Selection */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4">نوع التبرع</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDonationType("anonymous")}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      donationType === "anonymous"
                        ? "border-rose-500 bg-rose-500/20 text-white"
                        : "border-gray-600 bg-gray-800/30 text-gray-300 hover:border-gray-500"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-semibold">
                        تبرع بهوية مجهولة
                      </div>
                      <div className="text-sm mt-1">تبرع بدون كشف الهوية</div>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDonationType("with-credentials")}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      donationType === "with-credentials"
                        ? "border-rose-500 bg-rose-500/20 text-white"
                        : "border-gray-600 bg-gray-800/30 text-gray-300 hover:border-gray-500"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-semibold">
                        أدخل بياناتك للتبرع
                      </div>
                      <div className="text-sm mt-1">تبرع مع كشف الهوية</div>
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Donor Information */}
              {donationType === "with-credentials" && (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      الإسم الكامل *
                    </label>
                    <input
                      type="text"
                      value={donorInfo.name}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, name: e.target.value })
                      }
                      placeholder="اسمكم الكامل"
                      className="w-full p-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 border border-gray-600 focus:border-green-500 focus:outline-none focus:bg-gray-800/70"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      البريد الإلكتروني (اختياري)
                    </label>
                    <input
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, email: e.target.value })
                      }
                      placeholder="البريد.الإلكتروني@example.com (اختياري)"
                      className={`w-full p-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 border transition-colors ${
                        donorInfo.email &&
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorInfo.email)
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-gray-600 focus:border-green-500"
                      } focus:outline-none focus:bg-gray-800/70`}
                    />
                    {donorInfo.email &&
                      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorInfo.email) && (
                        <p className="text-red-500 text-sm mt-2">
                          الرجاء إدخال بريد إلكتروني صحيح.
                        </p>
                      )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      الهاتف (اختياري)
                    </label>
                    <input
                      type="tel"
                      value={donorInfo.phone}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, phone: e.target.value })
                      }
                      placeholder="+213xxxxxxxxx مثال: "
                      className="w-full p-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 border border-gray-600 focus:border-green-500 focus:outline-none focus:bg-gray-800/70"
                    />
                  </div>
                </div>
              )}

              {/* Anonymous donation message */}
              {donationType === "anonymous" && (
                <div className="mb-6 p-4 bg-blue-500/20 rounded-xl border border-blue-500/30">
                  <p className="text-blue-200 text-sm text-center">
                    ✓ تم اختيار التبرع المجهول. لن يتم حفظ أي بيانات شخصية.
                  </p>
                </div>
              )}

              {/* Donate Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDonation}
                disabled={
                  isLoading ||
                  getCurrentAmount() < 500 ||
                  !donationType ||
                  (donationType === "with-credentials" &&
                    (!donorInfo.name ||
                      (donorInfo.email !== "" &&
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorInfo.email))))
                }
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 space-x-reverse"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Heart className="h-5 w-5" fill="currentColor" />
                    <span>
                      تبرع {getCurrentAmount().toLocaleString() || 0} دج
                    </span>
                  </>
                )}
              </motion.button>

              {/* Security Notice */}
              <div className="mt-4 flex items-center text-sm text-gray-300 space-x-reverse">
                <Shield className="h-4 w-4 ml-2 text-green-400" />
                مؤمن بواسطة Chargily Pay - آمن وموثوق
              </div>
            </motion.div>

            {/* Impact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-rose-500" />
                  كيف يُحدث تبرعك فرقًا؟
                </h4>
                <p className="text-gray-300 mb-4">
                  كل مساهمة، بغض النظر عن حجمها، تذهب مباشرة لدعم جهودنا
                  الإنسانية. تبرعك يساعد في:
                </p>
                <div className="space-y-3 text-gray-300">
                  <div>
                    •{" "}
                    <strong className="bg-rose-500/70 p-1">
                      تأمين الغذاء الأساسي:
                    </strong>{" "}
                    ضمان وصول الطرود الغذائية التي تحتوي على مواد أساسية ومياه
                    نظيفة للأسر المحتاجة.
                  </div>
                  <div>• توفير المساعدات الطبية العاجلة والأدوية.</div>
                  <div>• دعم المأوى للأسر النازحة والمتضررة.</div>
                  <div>• تقديم الدعم النفسي والاجتماعي للأطفال والعائلات.</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">لماذا التبرع؟</h4>
                <div className="space-y-3 text-gray-300">
                  <div>✓ 100% من التبرعات تذهب مباشرة للبرامج</div>
                  <div>✓ تقارير شفافة ومتابعة تأثير التبرعات</div>
                  <div>✓ تركيز محلي لتحقيق أقصى تأثير مجتمعي</div>
                  <div>
                    ✓ تحديثات منتظمة حول كيفية استفادة المجتمع من التبرعات
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl p-6 border border-rose-500/30">
                <h4 className="text-xl font-bold mb-3 text-rose-300">
                  التبرع الشهري
                </h4>
                <p className="text-gray-300 text-sm">
                  فكر في إعداد تبرع شهري لتقديم دعم مستمر. حتى المساهمات الصغيرة
                  المنتظمة تخلق تأثيرًا مستدامًا.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Tutorial Dialog */}
      {isVideoDialogOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoDialogOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-gray-800 text-right flex-1">
                كيفية استخدام منصة التبرع
              </h3>
              <button
                onClick={() => setIsVideoDialogOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="aspect-video mb-4">
                {/* Replace this YouTube URL with your actual tutorial video */}
                <iframe
                  src="https://www.youtube.com/embed/Y3JK6oFBoiU"
                  title="كيفية استخدام منصة التبرع"
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default DonationSection;
