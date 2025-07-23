import React from "react";
import { motion } from "framer-motion";
import { XCircle, RefreshCw, Home, ArrowLeft } from "lucide-react";

const FailurePage: React.FC = () => {
  const goHome = () => {
    window.location.href = "/";
  };

  const tryAgain = () => {
    window.location.href = "/#donate";
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center px-4"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="mb-6"
        >
          <XCircle className="h-20 w-20 text-red-500 mx-auto" />
        </motion.div>

        {/* Error Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          فشل في الدفع
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-gray-600 mb-6"
        >
          نعتذر، لكن لم يتمكن من معالجة دفعتكم في هذا الوقت. يرجى المحاولة مرة
          أخرى أو الاتصال بنا للحصول على المساعدة.
        </motion.p>

        {/* Possible Reasons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gray-50 rounded-xl p-4 mb-6 text-right"
        >
          <h3 className="font-semibold text-gray-800 mb-2">
            الأسباب المحتملة:
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• أموال غير كافية</li>
            <li>• مشكلة في الاتصال بالشبكة</li>
            <li>• خطأ في البطاقة/طريقة الدفع</li>
            <li>• انتهت مهلة المعاملة</li>
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="space-y-3"
        >
          <button
            onClick={tryAgain}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
          >
            <RefreshCw className="h-5 w-5" />
            <span>حاول مرة أخرى</span>
          </button>

          <button
            onClick={goHome}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
          >
            <Home className="h-5 w-5" />
            <span>العودة للرئيسية</span>
          </button>

          <button
            onClick={() => window.history.back()}
            className="w-full bg-transparent text-gray-500 py-3 rounded-full font-semibold hover:text-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>العودة</span>
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-6 text-sm text-gray-500"
        >
          <p>تحتاجون مساعدة؟ اتصلوا بنا:</p>
          <p className="mt-1 font-semibold">contact@gaza-support.org</p>
          <p>+970 59 123 456</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FailurePage;
