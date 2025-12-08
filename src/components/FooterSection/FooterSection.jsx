import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

/* -----------------------
   AOS-like animation builder
-------------------------*/
const getVariants = (type) => {
  switch (type) {
    case "fade-up":
      return { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };

    case "fade-down":
      return { hidden: { opacity: 0, y: -40 }, show: { opacity: 1, y: 0 } };

    case "fade-left":
      return { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } };

    case "fade-right":
      return { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } };

    case "zoom":
      return {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 },
      };

    default:
      return { hidden: { opacity: 0 }, show: { opacity: 1 } };
  }
};

/* -----------------------
   Reusable Animated Wrapper
-------------------------*/
const AnimateOnScroll = ({ children, delay = 0, type = "fade-up" }) => {
  return (
    <motion.div
      variants={getVariants(type)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2 }} // 👈 animation re-triggers ever time, NOT once
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

/* -----------------------
   FOOTER SECTION
-------------------------*/

export default function FooterSection() {
  const quickLinks = [
    "About Us",
    "Our Events",
    "Gallery",
    "Membership",
    "Contact Us",
    "Donate",
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background World Map */}
      <div className="absolute inset-0 opacity-5">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M200,150 L220,140 L240,145 L250,135 L270,140 L280,130 L300,135 L320,145 L340,140 L360,150 L380,145 L400,155"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          <div className="col-span-2">
            <AnimateOnScroll type="fade-right">
              <div className="space-y-6 col-span-2">
                <h3 className="text-2xl font-bold mb-6">Sardar Patel Bhavan</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500/20 p-2 rounded-lg mt-1">
                      <MapPin className="w-5 h-5 text-orange-400" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      #16, Thimmaiah Road, (Opp. Cantt. Rly Station), Vasanth
                      Nagar, Bengaluru - 560 052
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500/20 p-2 rounded-lg">
                      <Phone className="w-5 h-5 text-orange-400" />
                    </div>
                    <div className="text-gray-300">
                      <a
                        href="tel:+916287678767"
                        className="hover:text-orange-400 block"
                      >
                        +91 62876 78767
                      </a>
                      <a
                        href="tel:08042033854"
                        className="hover:text-orange-400 block"
                      >
                        080 4203 3854
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500/20 p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-orange-400" />
                    </div>
                    <a
                      href="mailto:patelbhavanbengaluru@hotmail.com"
                      className="text-gray-300 hover:text-orange-400"
                    >
                      patelbhavanbengaluru@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          {/* Quick Links */}
          <AnimateOnScroll delay={0.15} type="fade-up">
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }} className="group">
                    <a className="text-gray-300 hover:text-orange-400 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <div className="col-span-2">
            <AnimateOnScroll delay={0.25} type="zoom">
              <div className="col-span-2">
                <h3 className="text-xl font-bold mb-6">Newsletter</h3>
                <p className="text-gray-300 mb-6">
                  Stay connected with our community for upcoming events and
                  updates.
                </p>

                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl"
                  >
                    Subscribe
                  </motion.button>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-gray-400 mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="bg-white/10 hover:bg-orange-500 p-3 rounded-xl"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 Sardar Patel Bhavan Bengaluru. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a className="text-gray-400 hover:text-orange-400">
              Privacy Policy
            </a>
            <a className="text-gray-400 hover:text-orange-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
