import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Heart, Home, ArrowLeft } from "lucide-react";

const SuccessPage: React.FC = () => {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="mb-6"
        >
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
        </motion.div>

        {/* Success Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          تم التبرع بنجاح!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-gray-600 mb-6"
        >
          شكراً لكم على تبرعكم السخي. دعمكم يحدث فرقاً حقيقياً في مجتمعنا وأهالي
          غزة.
        </motion.p>

        {/* Impact Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-rose-50 rounded-xl p-4 mb-6"
        >
          <Heart
            className="h-8 w-8 text-rose-500 mx-auto mb-2"
            fill="currentColor"
          />
          <p className="text-rose-800 font-semibold">
            تبرعكم سيساعد في تقديم الدعم الأساسي للعائلات في غزة ومناطق أخرى
            محتاجة.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="space-y-3"
        >
          <button
            onClick={goHome}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
          >
            <Home className="h-5 w-5" />
            <span>العودة للرئيسية</span>
          </button>

          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>العودة</span>
          </button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-6 text-sm text-gray-500"
        >
          <p>ستتلقون إيصالاً عبر البريد الإلكتروني قريباً.</p>
          <p className="mt-1">المعاملة مؤمنة بواسطة Chargily Pay</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
