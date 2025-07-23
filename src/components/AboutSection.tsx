import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Target } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "دعوية إسلامية",
      description:
        "حركة دعوية إسلامية تسعى لتحقيق الإصلاح والتغيير من خلال نخب المجتمع وقياداته الفكرية.",
    },
    {
      icon: Users,
      title: "جزائرية الانتماء",
      description:
        "جزائرية المنشأ والحركة، تؤمن بالمصير المشترك بين أطراف الأمة الإسلامية وأهدافها.",
    },
    {
      icon: Globe,
      title: "عربية إسلامية",
      description:
        "مرتبطة بمخزونها العقدي وامتدادها الطبيعي العربي الإسلامي، منفصلة عن مركزية الغرب.",
    },
    {
      icon: Target,
      title: "علمية الهدف",
      description:
        "علمية في مبدئها وغايتها، تسعى لتحقيق التنمية وتحصين الاستقلال في جميع المجالات.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white" dir="rtl">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              عن{" "}
              <span className="text-rose-500">
                جمعية العلماء المسلمين الجزائريين
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نحن حركة دعوية إسلامية، أطلق عليها مؤسسوها الأوائل اسم "جمعية
              العلماء المسلمين الجزائريين". أُنشئت سنة 1931م استجابة لنداء الله
              سبحانه (وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ
              وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ
              وَأُوْلَـئِكَ هُمُ الْمُفْلِحُونَ) [آل عمران 104]، وتفاعلاً مع
              حاجة الأمة الحضارية. نحن جمعية إسلامية في سيرها وأعمالها، جزائرية
              في مدارها وأوضاعها، علمية في مبدئها وغايتها.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Heart
                    className="h-24 w-24 text-rose-500 mx-auto mb-4"
                    fill="currentColor"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    رسالتنا
                  </h3>
                  <p className="text-gray-600">
                    "الإسلام ديننا والعربية لغتنا والجزائر وطننا"
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-300 rounded-full opacity-30"></div>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                جمعية العلماء المسلمين الجزائريين
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                هي <span className="font-bold text-rose-500/80">جمعية</span>{" "}
                لتمييزها عن الأحزاب والنقابات،{" "}
                <span className="font-bold text-rose-500/80">والعلماء</span>{" "}
                اعتقاداً من روادها الأوائل، أن عملية الإصلاح والتغيير تبدأ
                دائماً من نخب المجتمع وقياداته الفكرية والثقافية، وتتمدد في
                ساحات المجتمع بفضل جهود المصلحين العاملين.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                <span className="font-bold text-rose-500/80">والمسلمين،</span> لربطها بمخزونها العقدي وامتدادها الطبيعي
                العربي الإسلامي، وفصلها عن مركزية الغرب وغاياته الاستعمارية.
                <span className="font-bold text-rose-500/80">والجزائريين؛</span> لأنها جزائرية المنشأ والحركة، وهي وإن كانت تؤمن
                بالمصير المشترك بين أطراف الأمة الإسلامية وأهدافها.
              </p>

              <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-500">
                <p className="text-green-800 font-semibold italic text-center">
                  "وَقُلِ اعْمَلُواْ فَسَيَرَى اللّهُ عَمَلَكُمْ وَرَسُولُهُ
                  وَالْمُؤْمِنُونَ وَسَتُرَدُّونَ إِلَى عَالِمِ الْغَيْبِ
                  وَالشَّهَادَةِ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ"
                </p>
                <p className="text-green-600 text-sm mt-2 text-center">
                  [التوبة: 105]
                </p>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
