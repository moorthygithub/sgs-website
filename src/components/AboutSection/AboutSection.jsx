import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  Globe,
  Heart,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import { motion } from "framer-motion";

const AboutSection = () => {
  const highlights = [
    {
      icon: Users,
      title: "United Community",
      description: "Bringing Gujaratis together",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Sparkles,
      title: "Cultural Heritage",
      description: "Preserving our traditions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Social Initiatives",
      description: "Supporting each other",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Festivals & gatherings",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const features = [
    { icon: Globe, text: "Connecting Gujaratis worldwide" },
    { icon: Shield, text: "Strong community values" },
    { icon: Star, text: "Cultural programs & festivals" },
    { icon: BookOpen, text: "Educational initiatives" },
  ];

  return (
    <section className="relative py-4 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-200/30 to-orange-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE SECTION */}
          <AnimateOnScroll type="fade-right">
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-red-600/20 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=1000&fit=crop"
                  alt="Samyutk Gujarati Samaj Community"
                  className="md:w-full h-[600px] object-cover"
                />
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-3 md:p-6 shadow-2xl z-20 transform transition-all duration-500 group-hover:translate-y-[-4px]">
                  <div className="flex items-center gap-4">
                    <div className=" w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xl md:text-3xl font-bold text-gray-900">
                        5000+
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        Members
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl  p-2 md:p-5 shadow-2xl z-20 transform transition-all duration-500 group-hover:translate-y-[-4px]">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 border-2 border-white" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-pink-400 border-2 border-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        Active Today
                      </div>
                      <div className="text-xs text-gray-600">
                        Join the conversation
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl -z-10 transform rotate-6" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl -z-10 transform -rotate-6" />
            </div>
          </AnimateOnScroll>

          {/* TEXT SECTION */}
          <AnimateOnScroll type="fade-left">
            <div className="space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide border border-orange-200"
              >
                <Award className="w-4 h-4" />
                About Us
              </motion.div>
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  Samyutk Gujarati{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Samaj
                  </span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed font-medium text-justify">
                  A united community celebrating our culture, values, and
                  togetherness. We bring Gujaratis living away from home closer
                  through social, cultural, and charitable activities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  Samyutk Gujarati Samaj is a vibrant community organization
                  formed with the vision of uniting Gujaratis under one
                  platform.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  With regular gatherings, festivals, and programs, we keep the
                  spirit of Gujarat alive everywhere.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <AnimateOnScroll
                      key={index}
                      type="zoom-in"
                      delay={index * 0.15}
                    >
                      <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {feature.text}
                        </span>
                      </div>
                    </AnimateOnScroll>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimateOnScroll type="fade-up">
                  <button className="group px-8 py-4 cursor-pointer !bg-gradient-to-r from-orange-600 to-red-600 !text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Explore More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </AnimateOnScroll>

                <AnimateOnScroll type="fade-up" delay={0.2}>
                  <button className="px-8 py-4 !bg-white cursor-pointer !text-orange-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 border-2 border-orange-600 hover:bg-orange-50">
                    Join Community
                  </button>
                </AnimateOnScroll>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* HIGHLIGHTS GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <AnimateOnScroll key={index} type="zoom-in" delay={index * 0.15}>
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {highlight.description}
                  </p>

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
