import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Bell,
} from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

const EventCard = ({
  image,
  title,
  date,
  time,
  location,
  description,
  tag,
  delay,
  animationType,
}) => {
  return (
    <AnimateOnScroll delay={delay} type={animationType}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-orange-100"
      >
        {/* Image Container */}
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-orange-100 via-orange-50 to-pink-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-7xl sm:text-8xl opacity-10"
            >
              🎉
            </motion.div>
          </div>

          {tag && (
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 }}
              className="absolute top-3 left-3 sm:top-5 sm:left-5"
            >
              <span className="bg-white text-orange-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold shadow-md inline-flex items-center gap-2 border border-orange-200">
                <Sparkles className="w-3 h-3" />
                {tag}
              </span>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-7">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </h3>

          <div className="space-y-3 mb-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-3 text-gray-600"
            >
              <div className="bg-orange-50 p-2 rounded-lg">
                <Calendar className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-sm font-medium pt-1">{date}</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-3 text-gray-600"
            >
              <div className="bg-orange-50 p-2 rounded-lg">
                <Clock className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-sm pt-1">{time}</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-3 text-gray-600"
            >
              <div className="bg-orange-50 p-2 rounded-lg">
                <MapPin className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-sm pt-1">{location}</span>
            </motion.div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            {description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3.5 rounded-2xl font-semibold hover:from-orange-500 hover:to-orange-600 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 group"
          >
            <span>View Details</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
};

export default function EventsPage() {
  const events = [
    {
      title: "Navratri Celebration 2025",
      date: "October 2-10, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Samaj Community Hall, Bengaluru",
      description:
        "Join us for 9 nights of traditional Garba and Dandiya with live music, traditional attire, and delicious food.",
      tag: "Featured",
      delay: 0.1,
      animationType: "fade-left",
    },
    {
      title: "Diwali Festival of Lights",
      date: "November 1, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Community Center, Koramangala",
      description:
        "Celebrate with traditional puja, cultural performances, fireworks display, and a grand community dinner.",
      tag: "Upcoming",
      delay: 0.2,
      animationType: "zoom-in",
    },
    {
      title: "Family Picnic & Sports Day",
      date: "December 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Lalbagh Botanical Garden",
      description:
        "A fun-filled day with outdoor games, sports competitions, picnic lunch, and activities for all ages.",
      tag: "New",
      delay: 0.3,
      animationType: "fade-right",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 via-white to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <AnimateOnScroll type="fade-up">
          <div className="text-center mb-20 space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide border border-orange-200"
            >
              <Calendar className="w-4 h-4" />
              UPCOMING EVENTS
            </motion.div>
            <AnimateOnScroll type="fade-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Our Events
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll type="fade-up">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our calendar is filled with celebrations, cultural programs,
                social gatherings, and charity drives. From Navratri and Diwali
                to educational workshops and family picnics, there's something
                for everyone.
              </p>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>

        {/* Event Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA Section - Full Width */}
      <div className="mt-20 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll type="fade-left" delay={0.2}>
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Bell className="w-4 h-4" />
                  Stay Updated
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Never Miss
                  <br />
                  an Event!
                </h2>
                <p className="text-orange-50 text-lg leading-relaxed">
                  Subscribe to our newsletter and get instant notifications
                  about upcoming celebrations, cultural programs, and community
                  gatherings.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll type="fade-right" delay={0.3}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Event Updates
                </h3>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 rounded-2xl font-bold hover:from-orange-500 hover:to-orange-600 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    Subscribe Now
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <p className="text-gray-500 text-sm text-center">
                    Join 1000+ community members already subscribed
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
