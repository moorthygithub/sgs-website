import React from "react";
import { motion } from "framer-motion";
import { Globe, Clock, Headphones, CheckCircle } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <AnimateOnScroll delay={delay} type="fade-right">
      <motion.div whileHover={{ x: 10 }} className="flex gap-5 group">
        <div className="shrink-0">
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
            <Icon className="w-7 h-7 text-orange-600" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      icon: Globe,
      title: "Worldwide Service",
      description:
        "Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet",
      delay: 0.2,
    },
    {
      icon: Clock,
      title: "On Time Delivery",
      description:
        "Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet",
      delay: 0.3,
    },
    {
      icon: Headphones,
      title: "24/7 Telephone Support",
      description:
        "Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-10">
            <AnimateOnScroll type="fade-left">
              <div className="space-y-4">
                <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold inline-block">
                  OUR FEATURES
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  We Are Trusted
                  <br />
                  Logistics Company
                  <br />
                  Since 1990
                </h2>
              </div>
            </AnimateOnScroll>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <AnimateOnScroll type="fade-right">
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img
                  src="https://samyuktgujaratisamaj.com/draft1/img/feature.jpg"
                  alt="Features"
                  className="w-full h-full object-cover"
                />

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        30+
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        100%
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        Satisfaction
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl"></div>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
