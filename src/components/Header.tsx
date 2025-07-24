import React, { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
            <span className="text-2xl font-bold text-gray-800">
              جمعية العلماء  <span className="text-rose-500">سطيف</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button
              onClick={() => scrollToSection("home")}
              className="text-black text-lg font-semibold hover:text-rose-500 transition-colors"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection("gaza-situation")}
              className="text-black text-lg font-semibold  hover:text-rose-500 transition-colors"
            >
              الوضع في غزة
            </button>
            <button
              onClick={() => scrollToSection("donate")}
              className="text-black text-lg font-semibold  hover:text-rose-500 transition-colors"
            >
              تبرع
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-black text-lg font-semibold  hover:text-rose-500 transition-colors"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-black text-lg font-semibold  hover:text-rose-500 transition-colors"
            >
              الأثر
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black text-lg font-semibold  hover:text-rose-500 transition-colors"
            >
              اتصل بنا
            </button>
          </nav>

          {/* Donate Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("donate")}
            className="hidden md:block bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            تبرع الآن
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-rose-500"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-rose-500 transition-colors text-right"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection("gaza-situation")}
                className="text-gray-700 hover:text-rose-500 transition-colors text-right"
              >
                الوضع في غزة
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-rose-500 transition-colors text-right"
              >
                من نحن
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="text-gray-700 hover:text-rose-500 transition-colors text-right"
              >
                الأثر
              </button>
              <button
                onClick={() => scrollToSection("donate")}
                className="text-gray-700 hover:text-rose-500 transition-colors text-right"
              >
                تبرع
              </button>
              <button
                onClick={() => scrollToSection("videos")}
                className="text-gray-700 hover:text-rose-500 transition-colors text-right"
              >
                معرض الصور
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-rose-500 transition-colors text-right"
              >
                شهادات
              </button>
              <button
                onClick={() => scrollToSection("donate")}
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full font-semibold mt-4"
              >
                تبرع الآن
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
