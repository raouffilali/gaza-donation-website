import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: "impact" | "events" | "testimonials";
}

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Sample videos - in a real app, these would come from a backend
  const videos: Video[] = [
    {
      id: "1",
      title: "مشروع المطبخ المجتمعي",
      description: "تقديم وجبات ساخنة للعائلات المحتاجة في غزة خلال الشتاء",
      thumbnail:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "impact",
    },
    {
      id: "2",
      title: "برنامج الدعم التعليمي",
      description: "دعم الأطفال باللوازم المدرسية والدروس الخصوصية",
      thumbnail:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "impact",
    },
    {
      id: "3",
      title: "حفل الخير السنوي 2024",
      description: "أبرز لحظات حدث جمع التبرعات السنوي لدعم غزة",
      thumbnail:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "events",
    },
    {
      id: "4",
      title: "قصة سارة",
      description: "كيف غيّر برنامجنا التعليمي حياة فتاة صغيرة",
      thumbnail:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "testimonials",
    },
    {
      id: "5",
      title: "توزيع المساعدات الطبية",
      description: "إيصال الإمدادات الطبية الأساسية للمناطق النائية في غزة",
      thumbnail:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "impact",
    },
    {
      id: "6",
      title: "ورشة تدريب المتطوعين",
      description: "تدريب متطوعين جدد لبرامجنا المجتمعية في غزة",
      thumbnail:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "events",
    },
  ];

  const categories = [
    { id: "all", label: "جميع الفيديوهات" },
    { id: "impact", label: "قصص التأثير" },
    { id: "events", label: "الفعاليات" },
    { id: "testimonials", label: "الشهادات" },
  ];

  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  const openVideoModal = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="videos" className="py-16 sm:py-20 bg-gray-50" dir="rtl">
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
              معرض <span className="text-rose-500">الفيديوهات</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              شاهدوا تأثير تبرعاتكم من خلال قصص قوية وفعاليات مجتمعية وشهادات من
              أولئك الذين تغيرت حياتهم في غزة.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-rose-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Video Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => openVideoModal(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/90 backdrop-blur-sm rounded-full p-4"
                    >
                      <Play
                        className="h-8 w-8 text-rose-500"
                        fill="currentColor"
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-500 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedVideo.title}
              </h3>
              <button
                onClick={closeVideoModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoGallery;
