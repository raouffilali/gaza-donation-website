import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, AlertTriangle, Heart, Users } from "lucide-react";

interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  title: string;
  description: string;
  date: string;
}

const GazaSituationSection: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    {
      id: "1",
      type: "image",
      url: "https://img.youtube.com/vi/wOJ_byQHgtk/maxresdefault.jpg",
      title: "أطفال غزة يحتاجون المساعدة",
      description:
        "في عيون أطفال غزة، تتجلى قصص الصمود الممزوجة بواقع قاسٍ من المعاناة اليومية. يواجهون نقصًا حادًا في أبسط مقومات الحياة كالغذاء والدواء، لكن أرواحهم تظل منارة للأمل.",
      date: "2024-01-15",
    },
    {
      id: "2",
      type: "video",
      url: "https://www.youtube.com/embed/oT8Lb3pYfCg",
      thumbnail: "https://img.youtube.com/vi/oT8Lb3pYfCg/maxresdefault.jpg",
      title: "الوضع الإنساني في غزة",
      description:
        "يأخذكم هذا الفيديو إلى ما وراء العناوين الرئيسية، إلى قلب غزة، لتشهدوا الحياة اليومية لعائلات تكافح من أجل حياة طبيعية وسط الفوضى. إنها شهادة قوية على صمودهم والحاجة الماسة للدعم الإنساني.",
      date: "2025-07-20",
    },
    {
      id: "3",
      type: "image",
      url: "https://www.aljazeera.com/wp-content/uploads/2024/02/image-1707423621.jpg?resize=1800%2C1063",
      title: "دمار يروي قصة صمود",
      description:
        "خلف كل مبنى مدمر، قصة منزل وعائلة وذكريات دُفنت تحت الأنقاض. حجم الدمار هائل، ورحلة إعادة بناء الأرواح، وليس فقط المباني، طويلة وشاقة.",
      date: "2024-01-12",
    },
    {
      id: "4",
      type: "video",
      url: "https://www.youtube.com/embed/zTC8583BRM4",
      thumbnail: "https://img.youtube.com/vi/zTC8583BRM4/maxresdefault.jpg",
      title: "يحمل وعاءً فارغاً ويبكي لأجل الطعام",
      description:
        "والله لا يوجد شيء نطعمك إياه.. فلسطيني يوثق لحظة مؤلمة لطفله وهو يحمل وعاءً فارغاً ويبكي طالباً الطعام وسط تفاقم الجوع على المحاصرين في قطاع غزة.",
      date: "2025-07-23",
    },
    {
      id: "5",
      type: "video",
      url: "https://www.youtube.com/embed/lnAOJghhawU",
      thumbnail: "https://img.youtube.com/vi/lnAOJghhawU/maxresdefault.jpg",
      title: " الموت جوعا أو الموت قصفا, هذه هي غزة ",
      description:
        "نقص حاد في الغذاء والدواء، معاناة يومية لأهل غزة. هذا الفيديو يسلط الضوء على الأوضاع الإنسانية الصعبة التي يعيشها الناس، ويظهر كيف أن كل لحظة من حياتهم مليئة بالتحديات والأمل في غدٍ أفضل.",
      date: "2024-01-08",
    },
    {
      id: "6",
      type: "image",
      url: "https://img.youtube.com/vi/lQGHxfvtkss/maxresdefault.jpg",
      title: "  تجويع قاتل يتواصل في غزة",
      description:
        "الحصار المستمر يترك غزة في حالة من الجوع والفقر. هذه الصورة تبرز الأطفال الذين يعانون من نقص التغذية، حيث لا يستطيعون الحصول على ما يكفي من الطعام أو الرعاية الصحية الأساسية.",
      date: "2025-05-02",
    },
    {
      id: "7",
      type: "video",
      url: "https://www.youtube.com/embed/qRqzrrWGbrg",
      thumbnail: "https://img.youtube.com/vi/qRqzrrWGbrg/maxresdefault.jpg",
      title: "صرخة من أجل العيش في غزة",
      description:
        "ساعات  صعبة يعيشها سكان غزة، مع اشتداد أزمة الجوع.لا تكاد تمضي ساعة حتى يضاف إلى لائحة القتل اليومي رضيعٌ أو طفل أو امرأة أو رجل افترسهُ ألم الأمعاء الخاوية، لأنّ الاحتلال ووراءَه الصمت الدوليّ قررا أن ذلك مصيرٌ يستحقّه سكان غزة.غزة.. تحذيرات من موت جماعي بسبب الجوع",
      date: "2025-07-20",
    },
    {
      id: "8",
      type: "video",
      url: "https://www.youtube.com/embed/uxtloMX3a9I",
      thumbnail: "https://img.youtube.com/vi/uxtloMX3a9I/maxresdefault.jpg",
      title: "مشاهد من قلب المعاناة في غزة",
      description:
        "الجوع يشتد في غزة.. طفل يبحث عن بقايا الطعام داخل قدر فارغ ⁣",
      date: "2025-04-27",
    },
    {
      id: "9",
      type: "video",
      url: "https://www.youtube.com/embed/WCl0ncG7DMU",
      thumbnail: "https://img.youtube.com/vi/sLjaABXBGCc/maxresdefault.jpg",
      title: "مشاهد من قلب المعاناة في غزة",
      description: "الجوع يشتد في غزة..  ⁣",
      date: "2025-04-27",
    },
  ];

  const openMedia = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  return (
    <section
      id="gaza-situation"
      className="py-20 bg-gradient-to-br from-red-50 to-orange-50"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="flex justify-center mb-6"
              animate={{
              scale: [1, 1.1, 1, 1.1, 1],
              rotate: [0, 3, -3, 3, 0],
              }}
              transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              }}
            >
              <AlertTriangle className="h-16 w-16 text-red-500" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              الوضع في <span className="text-red-500">غزة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اطلعوا على الأوضاع الصعبة التي يعيشها أهالي غزة والحاجة الماسة
              لدعمكم ومساعدتكم
            </p>
          </motion.div>

          {/* Statistics Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-red-600 text-white rounded-2xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Users className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold">2.3 مليون</div>
                <div className="text-red-100">شخص يحتاج مساعدة</div>
              </div>
              <div>
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold">80%</div>
                <div className="text-red-100">يعتمدون على المساعدات</div>
              </div>
              <div>
                <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold">15 شهر</div>
                <div className="text-red-100">من الأزمة المستمرة</div>
              </div>
            </div>
          </motion.div>

          {/* Media Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {mediaItems.map((media, index) => (
              <motion.div
                key={media.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openMedia(media)}
              >
                <div className="relative aspect-video">
                  <img
                    src={media.type === "video" ? media.thumbnail : media.url}
                    alt={media.title}
                    className="w-full h-full object-cover"
                  />
                  {media.type === "video" && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play
                          className="h-8 w-8 text-white"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {media.type === "video" ? "فيديو" : "صورة"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                    {media.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {media.description}
                  </p>
                  <div className="text-xs text-gray-400">{media.date}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                كونوا جزءاً من الحل
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                كل تبرع، مهما كان صغيراً، يمكن أن يحدث فرقاً في حياة عائلة في
                غزة. ساعدونا في تقديم الغذاء والدواء والمأوى لمن يحتاجه.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const donateSection = document.getElementById("donate");
                  if (donateSection) {
                    donateSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 space-x-reverse mx-auto"
              >
                <Heart className="h-6 w-6" fill="currentColor" />
                <span>تبرع الآن لمساعدة غزة</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeMedia}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-gray-800 text-right flex-1">
                {selectedMedia.title}
              </h3>
              <button
                onClick={closeMedia}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {selectedMedia.type === "video" ? (
                <div className="aspect-video mb-4">
                  <iframe
                    src={selectedMedia.url}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="mb-4">
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full rounded-lg"
                  />
                </div>
              )}
              <div className="text-right">
                <p className="text-gray-600 mb-2">
                  {selectedMedia.description}
                </p>
                <p className="text-sm text-gray-400">{selectedMedia.date}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GazaSituationSection;
