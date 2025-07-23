import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Home, Heart } from "lucide-react";

const ImpactSection: React.FC = () => {
  const visionGoals = [
    {
      icon: Users,
      title: "الإغاثة الغذائية",
      subtitle: "أولويتنا",
      description:
        "توفير الطعام والمواد الغذائية الأساسية للعائلات المحتاجة في غزة، من الخبز والأرز والزيت والحليب والخضروات",
    },
    {
      icon: GraduationCap,
      title: "المساعدات الطبية",
      subtitle: "إنقاذ الأرواح",
      description:
        "تقديم الأدوية والمعدات الطبية والعلاج للمرضى والجرحى، وتمويل العمليات الجراحية الطارئة",
    },
    {
      icon: Home,
      title: "مساعدات الإيواء",
      subtitle: "المأوى الآمن",
      description:
        "توفير الخيام والبطانيات والملابس الشتوية والصيفية، وإعادة تأهيل المنازل المدمرة والمساكن المؤقتة",
    },
    {
      icon: Heart,
      title: "الدعم النفسي والتعليمي",
      subtitle: "بناء المستقبل",
      description:
        "دعم الأطفال نفسياً وتعليمياً، توفير الكتب والمراجع التعليمية, ورعاية الأيتام والأرامل في غزة",
    },
  ];

  return (
    <section
      id="impact"
      className="py-16 sm:py-20 bg-gradient-to-br from-rose-50 to-pink-50"
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
              <span className="text-rose-500">مساعداتنا</span> لغزة
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نحن ملتزمون بتقديم المساعدات الأساسية والطارئة لإخواننا في غزة. من
              الطعام والدواء إلى المأوى والتعليم، نعمل على تلبية احتياجاتهم
              اليومية ودعم صمودهم في وجه المحن والتحديات.
            </p>
          </motion.div>

          {/* Vision and Goals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {visionGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <goal.icon className="h-8 w-8 text-white" />
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-rose-500 mb-1">
                    {goal.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {goal.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Our Vision and Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  كيف تساهم تبرعاتكم في دعم غزة
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  بتبرعاتكم الكريمة، نهدف إلى تقديم الدعم الإنساني الشامل
                  لإخواننا في غزة. كل مساهمة منكم تساعدنا في تحقيق هدفنا في
                  الوصول لمن يحتاج المساعدة وتخفيف معاناتهم.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      <strong>نسعى لتوفير المواد الغذائية الأساسية</strong>{" "}
                      بدعمكم لتلبية احتياجات العائلات من الطعام والشراب
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      <strong>نهدف لتقديم الرعاية الصحية</strong> من خلال
                      تبرعاتكم لدعم المرضى والمحتاجين للعلاج
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      <strong>نعمل على توفير المأوى والحماية</strong> بمساهمتكم
                      لمساعدة المتضررين في إيجاد مسكن آمن
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      <strong>نسعى لضمان وصول المياه النظيفة</strong> بدعمكم
                      لتحسين الظروف الصحية والمعيشية
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      <strong>نهدف لدعم تعليم الأطفال ورعايتهم</strong> من خلال
                      تبرعاتكم لضمان مستقبل أفضل للأجيال القادمة
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Heart
                      className="h-20 w-20 text-blue-600 mx-auto mb-4"
                      fill="currentColor"
                    />
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      إنقاذ حياة
                    </h4>
                    <p className="text-gray-600">
                      كل تبرع ينقذ حياة ويوفر الطعام والدواء لمن يحتاجه
                    </p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-300 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyan-300 rounded-full opacity-30"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
