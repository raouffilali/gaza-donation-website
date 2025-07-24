import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Background Images */}
        <motion.img
          src="https://media.npr.org/assets/img/2023/11/21/gettyimages-17150741001-d04be3e7261c5b194006da8f78456cddc9234cb5.jpg?s=1100&c=50&f=jpeg"
          alt=""
          className="absolute w-full h-full object-cover opacity-95"
          initial={{ scale: 1.1, y: 0 }}
          animate={{ scale: 1, y: [-30, 30, -30] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src="https://www.aljazeera.com/wp-content/uploads/2024/02/image-1707423621.jpg?resize=1800%2C1063"
          alt=""
          className="absolute w-full h-full object-cover opacity-50"
          initial={{ scale: 1, x: 0 }}
          animate={{ scale: 1.1, x: [-50, 50, -50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 to-blue-500/40"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Heart Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-white/20 backdrop-blur-md rounded-full p-6">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Heart className="h-16 w-16 text-white" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            معاً لدعم إخواننا
            <br />
            <span className="text-yellow-300"> في غــزة </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg font-semibold sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            انضم إلى جمعية العلماء المسلمين الجزائريين - سطيف في مهمتها لتقديم
            الأمل والطعام والموارد الأساسية لأهلنا في غزة. كل تبرعك يخلق موجة من
            التغيير الإيجابي ويصل إلى من يحتاجه أكثر.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("donate")}
              className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 space-x-reverse"
            >
              <Heart className="h-5 w-5" fill="currentColor" />
              <span>تبرع الآن</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("about")}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300"
            >
              اعرف المزيد
            </motion.button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                آلاف
              </div>
              <div className="text-sm font-semibold md:text-base text-gray-300">
                وجبات الطعام
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                مئات
              </div>
              <div className="text-sm font-semibold md:text-base text-gray-300">
                العائلات المدعومة
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                يومياً
              </div>
              <div className="text-sm font-semibold md:text-base text-gray-300">
                مساعدات مستمرة
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute  left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("donate")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <ArrowDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
