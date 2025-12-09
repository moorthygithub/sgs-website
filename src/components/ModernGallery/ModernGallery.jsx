import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/1.jpg",
    alt: "Children with laptop",
    category: "Events",
  },
  {
    id: 2,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/2.jpg",
    alt: "Girl with laptop",
    category: "Community",
  },
  {
    id: 3,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/3.jpg",
    alt: "Cat with laptop",
    category: "Fun",
  },
  {
    id: 4,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/4.jpg",
    alt: "Children learning",
    category: "Events",
  },
  {
    id: 5,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/5.jpg",
    alt: "Girl studying",
    category: "Community",
  },
  {
    id: 6,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/6.jpg",
    alt: "Children playing",
    category: "Events",
  },
  {
    id: 7,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/7.jpg",
    alt: "Laptop news",
    category: "News",
  },
  {
    id: 8,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/8.jpg",
    alt: "Cat relaxing8",
    category: "Fun",
  },

  {
    id: 9,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/10.jpg",
    alt: "Cat relaxing10",
    category: "Fun",
  },
  {
    id: 10,
    src: "https://samyuktgujaratisamaj.com/draft1/img/gallery/11.jpg",
    alt: "Cat relaxing11",
    category: "Fun",
  },

];

const categories = ["All", "Events", "Community", "Fun", "News"];

export default function ModernGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section className="pb-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Moments We{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Cherish
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of memorable events and community gatherings
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <span className="bg-orange-500 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                      {image.category}
                    </span>
                    <p className="font-semibold">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
