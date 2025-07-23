import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center z-50">
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* Animated Spinner with Heart */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Outer spinning ring */}
          <motion.div
            className="w-24 h-24 rounded-full border-4 border-rose-200 border-t-rose-500 mx-auto"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner pulsing heart */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          جمعية العلماء المسلمين الجزائريين
        </motion.h2>

        {/* Quranic Verse about Sadaqah */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          dir="rtl"
        >
          <div className="text-center">
            {/* Quran Icon */}
            <motion.div
              className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-green-600 text-xl font-bold">📖</span>
            </motion.div>

            {/* Quranic Verse */}
            <blockquote className="text-lg leading-relaxed text-gray-700 mb-4 font-medium">
              "مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ
              كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ
              مِّائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ ۗ وَاللَّهُ
              وَاسِعٌ عَلِيمٌ"
            </blockquote>

            {/* Verse Reference */}
            <cite className="text-green-600 font-semibold text-sm">
              سورة البقرة - الآية 261
            </cite>

            {/* Translation */}
            <motion.p
              className="text-gray-600 text-sm mt-4 italic leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              "مثل الذين ينفقون أموالهم في سبيل الله كمثل حبة أنبتت سبع سنابل،
              في كل سنبلة مائة حبة، والله يضاعف لمن يشاء، والله واسع عليم"
            </motion.p>
          </div>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="flex justify-center space-x-2 space-x-reverse mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-rose-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Additional inspiring text */}
        <motion.p
          className="text-gray-500 text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          نحمل الخير إلى إخواننا في غزة...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
