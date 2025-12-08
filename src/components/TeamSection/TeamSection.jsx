import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

const TeamCard = ({ name, designation, image, delay }) => {
  return (
    <AnimateOnScroll delay={delay} type="zoom-out">
      <motion.div
        whileHover={{ y: -10 }}
        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <img src={image} alt={name} className="w-full h-full object-cover" />

          {/* Social Icons Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-orange-500 text-gray-700 hover:text-white p-3 rounded-xl transition-all shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-orange-500 text-gray-700 hover:text-white p-3 rounded-xl transition-all shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-orange-500 text-gray-700 hover:text-white p-3 rounded-xl transition-all shadow-lg"
              >
                <Mail className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 font-medium">{designation}</p>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
};

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Rajesh Patel",
      designation: "President",
      image: "https://samyuktgujaratisamaj.com/draft1/img/team-1.jpg",
      delay: 0.1,
    },
    {
      name: "Priya Shah",
      designation: "Vice President",
      image: "https://samyuktgujaratisamaj.com/draft1/img/team-2.jpg",
      delay: 0.2,
    },
    {
      name: "Amit Kumar",
      designation: "Secretary",
      image: "https://samyuktgujaratisamaj.com/draft1/img/team-3.jpg",
      delay: 0.3,
    },
    {
      name: "Meera Desai",
      designation: "Treasurer",
      image: "https://samyuktgujaratisamaj.com/draft1/img/team-4.jpg",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16 space-y-4">
            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold inline-block">
              OUR TEAM
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Expert Team
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Members
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders driving our community forward with
              passion and commitment.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
