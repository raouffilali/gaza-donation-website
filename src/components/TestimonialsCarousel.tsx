import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  story: string;
  image: string;
  location: string;
}

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "أمينة بن عيسى",
      role: "أم لثلاثة أطفال",
      story:
        "عندما فقد زوجي عمله، لم نكن نعرف كيف سنطعم أطفالنا. قدمت منظمتكم لنا حزم غذائية وساعدت ابنتي الكبرى على مواصلة تعليمها. اليوم، هي تدرس الطب في الجامعة. نحن ممتنون إلى الأبد.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      location: "غزة، فلسطين",
    },
    {
      id: "2",
      name: "محمد شريف",
      role: "مستفيد سابق، متطوع حالياً",
      story:
        "قبل خمس سنوات، كنت بلا مأوى وأكافح. أعطتني منظمتكم المأوى والطعام، والأهم من ذلك، الأمل. ساعدوني في العثور على عمل وإعادة بناء حياتي. الآن أتطوع معهم لمساعدة الآخرين كما ساعدوني.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "غزة، فلسطين",
    },
    {
      id: "3",
      name: "فاطمة الزهراء",
      role: "مستفيدة من رعاية المسنين",
      story:
        "العيش وحيداً في سن 78 كان يصبح مستحيلاً. يزورني المتطوعون أسبوعياً، يحضرون البقالة، ويساعدون في المواعيد الطبية. يعاملونني كعائلة. لطفهم أعطاني سبباً للابتسام مرة أخرى.",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      location: "غزة، فلسطين",
    },
    {
      id: "4",
      name: "ياسين بو مدين",
      role: "طالب",
      story:
        "بفضل برنامج المنح الدراسية، تمكنت من مواصلة دراستي الهندسية عندما لم تستطع عائلتي تحمل التكاليف. أنا الآن في سنتي الأخيرة وقد حصلت بالفعل على وظيفة. أخطط لرد الجميل لمساعدة طلاب آخرين مثلي.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      location: "غزة، فلسطين",
    },
    {
      id: "5",
      name: "خديجة ملال",
      role: "صاحبة مشروع صغير",
      story:
        "ساعدني برنامج التمويل الصغير في بدء مخبزي الصغير. ما بدأ كطريقة لإعالة عائلتي نما إلى مشروع يوظف الآن ثلاث نساء أخريات من حينا. الأحلام تتحقق بالدعم المناسب.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      location: "غزة، فلسطين",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              قصص <span className="text-rose-500">الأمل</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              قصص حقيقية من أشخاص حقيقيين تأثرت حياتهم بكرمكم. هذه الشهادات تظهر
              التأثير الدائم لدعم مجتمعنا لأهالي غزة.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r"></div>

                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-full p-3">
                      <Quote className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      {/* Story */}
                      <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                        "{testimonials[currentIndex].story}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="border-t pt-6">
                        <h4 className="text-2xl font-bold text-gray-800 mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-rose-500 font-semibold mb-1">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-rose-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Be Part of Someone's Story
              </h3>
              <p className="text-lg text-rose-100 mb-6 max-w-2xl mx-auto">
                Every donation creates a new chapter of hope. Your contribution
                could be the turning point in someone's life story.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById("donate");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-rose-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Someone's Story Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
