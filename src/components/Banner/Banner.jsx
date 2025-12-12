import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Samyukt Gujarati Samaj",
      subtitle: "Connect with 10,000+ members worldwide",
      image: "https://samyuktgujaratisamaj.com/draft1/img/slider/banner1.jpg",
      cta: "Become a Member",
      stats: { icon: Users, value: "10,000+", label: "Active Members" },
    },
    {
      id: 2,
      title: "Sardar Patel Bhavan",
      subtitle: "Learn from industry experts and thought leaders",
      image: "https://samyuktgujaratisamaj.com/draft1/img/slider/banner2.jpg",
      cta: "View Events",
      stats: { icon: Calendar, value: "200+", label: "Events Annually" },
    },
    {
      id: 3,
      title: "Share Knowledge",
      subtitle: "Engage in meaningful discussions and collaborations",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=800&fit=crop",
      cta: "Start Discussion",
      stats: { icon: MessageCircle, value: "50,000+", label: "Conversations" },
    },
    {
      id: 4,
      title: "Achieve Your Goals",
      subtitle: "Celebrate success and support each other's growth",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&h=800&fit=crop",
      cta: "Get Started",
      stats: { icon: Award, value: "95%", label: "Success Rate" },
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const leftVariant = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const zoomVariant = {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative w-full h-[550px] sm:h-[600px] md:h-[700px] overflow-hidden bg-slate-900 group">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const StatsIcon = slide.stats.icon;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform:
                    index === currentSlide ? "scale(1.05)" : "scale(1)",
                }}
              />

              <div className="absolute inset-0 bg-black/40 z-10" />

              <div
                className="absolute inset-0 z-10 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-30 h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-12 md:mt-20 flex items-center">
                <div className="max-w-3xl">
                  <motion.h1
                    key={currentSlide + "-title"}
                    variants={textVariant}
                    initial="hidden"
                    animate="show"
                    className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-3"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    key={currentSlide + "-subtitle"}
                    variants={textVariant}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.1 }}
                    className="text-base sm:text-lg md:text-2xl text-white/90 font-light mb-4"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    key={currentSlide + "-buttons"}
                    variants={leftVariant}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 mb-4"
                  >
                    <button className="group px-8 py-4 bg-white text-indigo-900 font-semibold rounded-xl hover:bg-white/90 transform hover:scale-105 transition-all shadow-xl flex items-center gap-2">
                      {slide.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/30">
                      Learn More
                    </button>
                  </motion.div>

                  <motion.div
                    key={currentSlide + "-stats"}
                    variants={zoomVariant}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-4 px-4 py-3 sm:px-6 sm:py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <StatsIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {slide.stats.value}
                      </div>
                      <div className="text-sm text-white/80">
                        {slide.stats.label}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl hover:bg-white/20 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 border border-white/20 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl hover:bg-white/20 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 border border-white/20 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all ${
              index === currentSlide
                ? "w-8 sm:w-10 h-2.5 bg-white shadow-lg"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          ></button>
        ))}
      </div>

      <div className="absolute bottom-6 right-4 md:bottom-12 md:right-8 z-40 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium">
        <span className="text-lg font-bold">{currentSlide + 1}</span>
        <span className="opacity-60"> / {slides.length}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-40">
        <div
          className="h-full bg-gradient-to-r from-[#ca4b7e] via-[#fecd28] via-[#66c3d0] to-[#b0cb1f] transition-all"
          style={{
            width: isAutoPlaying ? "100%" : "0%",
            transition: isAutoPlaying ? "width 6s linear" : "width 0.3s",
          }}
          key={currentSlide}
        />
      </div>
    </div>
  );
};

export default Banner;
