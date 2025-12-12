import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    profession: "Business Owner",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-1.jpg",
    rating: 5,
    description:
      "The Samyukt Gujarati Samaj has been instrumental in keeping our cultural heritage alive. The events they organize bring our community together beautifully.",
  },
  {
    id: 2,
    name: "Priya Shah",
    profession: "Software Engineer",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-2.jpg",
    rating: 5,
    description:
      "Being part of this community has enriched my life immensely. The warmth and sense of belonging I feel here is truly exceptional.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    profession: "Entrepreneur",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-3.jpg",
    rating: 5,
    description:
      "From cultural celebrations to social gatherings, every event is organized with dedication. This community truly feels like home.",
  },
  {
    id: 4,
    name: "Meera Desai",
    profession: "Teacher",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-4.jpg",
    rating: 5,
    description:
      "The dedication to preserving traditions while embracing modern values is commendable. My family looks forward to every event.",
  },
  {
    id: 5,
    name: "Suresh Modi",
    profession: "Doctor",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-1.jpg",
    rating: 5,
    description:
      "A wonderful community that keeps our Gujarati culture thriving. The support and friendship here are invaluable to our family.",
  },
  {
    id: 6,
    name: "Kavita Joshi",
    profession: "Architect",
    image: "https://samyuktgujaratisamaj.com/draft1/img/team-2.jpg",
    rating: 5,
    description:
      "Outstanding organization and genuine care for community members. Every event is a celebration of our rich heritage and unity.",
  },
];

export default function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const visibleCards = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <AnimateOnScroll type="fade-up" delay={0.1}>
      <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <AnimateOnScroll type="fade-down" delay={0.15}>
            <div className="text-center mb-20">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide border border-orange-200"
              >
                <Star className="w-4 h-4" />
                TESTIMONIALS{" "}
              </motion.div>{" "}
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Our Clients Say!
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real stories from real people in our community
              </p>
            </div>
          </AnimateOnScroll>

          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {visibleCards.map((testimonial, index) => (
                  <AnimateOnScroll
                    key={testimonial.id}
                    type="fade-up"
                    delay={index * 0.15}
                  >
                    <div className="bg-white rounded-3xl p-8 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-200">
                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-orange-500 fill-current"
                          />
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
                        "{testimonial.description}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <div className="w-16 h-16 rounded-2xl overflow-hidden border-3 border-orange-200 shadow-md">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>

                        <div>
                          <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 font-medium">
                            {testimonial.profession}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <AnimateOnScroll type="zoom-in" delay={0.2}>
            <div className="flex items-center justify-center gap-6 mt-16">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevPage}
                className="bg-white hover:bg-orange-500 text-gray-700 hover:text-white p-4 rounded-2xl shadow-xl transition-all border-2 border-gray-200 hover:border-orange-500"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex gap-3">
                {[...Array(totalPages)].map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    whileHover={{ scale: 1.2 }}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? "w-12 h-3 bg-orange-500"
                        : "w-3 h-3 bg-gray-300 hover:bg-orange-300"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextPage}
                className="bg-white hover:bg-orange-500 text-gray-700 hover:text-white p-4 rounded-2xl shadow-xl transition-all border-2 border-gray-200 hover:border-orange-500"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
