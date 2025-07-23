import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useRecaptcha } from "../hooks/useRecaptcha";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useRecaptcha();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    setIsLoading(true);

    try {
      // Execute reCAPTCHA before submitting contact form
      const recaptchaToken = await executeRecaptcha("contact");

      const response = await fetch(import.meta.env.VITE_FORMBOLD_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptcha_token: recaptchaToken,
        }),
      });

      if (response.ok) {
        toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      content: "oulamasetif@yahoo.com",
      link: "mailto:oulamasetif@yahoo.com",
    },
    {
      icon: Phone,
      title: "الهاتف",
      content: "036 66 90 11",
      link: "tel:+21336669011",
    },
    {
      icon: MapPin,
      title: "العنوان",
      content: "سطيف، الجزائر",
      link: "https://www.google.com/maps/dir/?api=1&destination=36.191203939838%2C5.4327574",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      dir="rtl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MessageCircle
              className="h-16 w-16 text-rose-500 mx-auto mb-6"
              fill="currentColor"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-rose-500">تواصل</span> معنا
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نحن هنا للإجابة على استفساراتكم ومساعدتكم في المساهمة في دعم
              إخواننا في غزة. تواصلوا معنا في أي وقت وسنكون سعداء للمساعدة.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Send className="h-6 w-6 ml-2 text-rose-500" />
                أرسل لنا رسالة
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                      placeholder="اسمكم الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                      placeholder="البريد.الإلكتروني@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف (اختياري)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                      placeholder="+213xxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                      placeholder="موضوع الرسالة"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 space-x-reverse"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  معلومات التواصل
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 space-x-reverse"
                    >
                      <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-rose-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-rose-600 transition-colors"
                          dir="ltr"
                        >
                          {info.content}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="text-lg font-bold text-blue-800 mb-3">
                  استجابة سريعة
                </h4>
                <p className="text-blue-700 text-sm">
                  نلتزم بالرد على جميع الاستفسارات في أقرب وقت ممكن. في حالات
                  الطوارئ، يرجى الاتصال بنا مباشرة.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
