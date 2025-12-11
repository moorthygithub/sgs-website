import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

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
        hidden: { opacity: 0, scale: 0.85 },
        show: { opacity: 1, scale: 1 },
      };
    default:
      return { hidden: { opacity: 0 }, show: { opacity: 1 } };
  }
};

const AnimateOnScroll = ({ children, delay = 0, type = "fade-up" }) => (
  <motion.div
    variants={getVariants(type)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function FooterSection() {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Membership", path: "/membership" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0,160 C240,260 480,60 720,160 C960,260 1200,60 1440,160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="500"
            cy="300"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="900"
            cy="200"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <AnimateOnScroll type="fade-right">
              <h3 className="text-2xl font-bold mb-4">Sardar Patel Bhavan</h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500/20 p-2 rounded-lg mt-1">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    #16, Thimmaiah Road, (Opp. Cantt. Rly Station), Vasanth
                    Nagar, Bengaluru - 560 052
                  </p>
                </div>

                {/* Phone */}
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

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500/20 p-2 rounded-lg mt-1">
                    <Mail className="w-5 h-5 text-orange-400" />
                  </div>

                  <a
                    href="mailto:patelbhavanbengaluru@hotmail.com"
                    className="text-gray-300 hover:text-orange-400 break-all leading-relaxed"
                  >
                    patelbhavanbengaluru@hotmail.com
                  </a>
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
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-orange-400 flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Newsletter */}
          <AnimateOnScroll delay={0.25} type="zoom">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Stay connected with our community for upcoming events and
                updates.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white flex-1"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 cursor-pointer hover:bg-orange-600 px-8 py-3 rounded-xl whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-sm text-gray-400 mb-4">Follow Us</p>
                <div className="flex gap-4">
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

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-center md:text-left gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Sardar Patel Bhavan Bengaluru. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm justify-center md:justify-end">
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
