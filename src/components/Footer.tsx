import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 space-x-reverse mb-6">
                <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
                <span className="text-2xl font-bold">
                  جمعية العلماء المسلمين الجزائريين{" "}
                  <span className="text-rose-500">سطيف</span>
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                جمعية العلماء المسلمين الجزائريين سطيف مكرسة لإحداث تغيير إيجابي
                دائم في مجتمعنا. من خلال التعاطف والوحدة والتمكين، نعمل على
                معالجة أكثر احتياجات مجتمعنا إلحاحاً وبناء مستقبل أفضل للجميع في
                فلسطين وغزة.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4 space-x-reverse">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-rose-500 transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.facebook.com/OulamaMouslimin19"
                  className="bg-gray-800 p-3 rounded-full hover:bg-rose-500 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.facebook.com/OulamaMouslimin19"
                  className="bg-gray-800 p-3 rounded-full hover:bg-rose-500 transition-colors duration-300"
                >
                  <Youtube className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-300 hover:text-rose-500 transition-colors duration-300"
                  >
                    الرئيسية
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("gaza-situation")}
                    className="text-gray-300 hover:text-rose-500 transition-colors duration-300"
                  >
                    الوضع في غزة
                  </button>
                </li>{" "}
                <li>
                  <button
                    onClick={() => scrollToSection("donate")}
                    className="text-gray-300 hover:text-rose-500 transition-colors duration-300"
                  >
                    تبرع
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-300 hover:text-rose-500 transition-colors duration-300"
                  >
                    عنا
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("impact")}
                    className="text-gray-300 hover:text-rose-500 transition-colors duration-300"
                  >
                    تأثيرنا
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-300 hover:text-rose-500 transition-colors duration-300"
                  >
                    اتصل بنا
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">اتصل بنا</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <MapPin className="h-5 w-5 text-rose-500 mt-1" />
                  <div>
                    <p className="text-gray-300">
                      شارع عون ميلود
                      <br />
                      سطيف، الجزائر
                      <br />
                      19000
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Phone className="h-5 w-5 text-rose-500" />
                  <span className="text-gray-300" dir="ltr">
                    036 66 90 11
                  </span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Mail className="h-5 w-5 text-rose-500" />
                  <span className="text-gray-300">oulamasetif@yahoo.com</span>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-rose-500/20 rounded-lg border border-rose-500/30">
                <h4 className="font-semibold text-rose-300 mb-2">
                  الدعم الطارئ
                </h4>
                <p className="text-sm text-gray-300">
                  خط المساعدة :{" "}
                  <span className="font-semibold" dir="ltr">
                    036 66 90 11
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()}. جميع الحقوق محفوظة. | منظمة غير
                ربحية
              </p>
              <div className="flex space-x-6 space-x-reverse text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  سياسة الخصوصية
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-500 transition-colors"
                >
                  شروط الخدمة
                </a>
              </div>
            </div>

            {/* Payment Security Notice */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-xs">
                المدفوعات مؤمنة بواسطة • شريك الدفع, جميع التبرعات محفوظة
              </p>
              <p className="text-gray-500 text-xs">
                Developed with 💚 by{" "}
                <a
                  className="hover:text-rose-500 hover:underline"
                  target="_blank"
                  href="https://www.linkedin.com/in/abderraouf-filali/"
                >
                  Abderraouf FILALI
                </a>
                . All support to our brothers and sisters in Gaza 🇵🇸
              </p>
                <p className="text-green-400 text-xs mt-4 italic">
                "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ"
                <br />
                <span className="not-italic">- سورة الزمر, 10</span>
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
