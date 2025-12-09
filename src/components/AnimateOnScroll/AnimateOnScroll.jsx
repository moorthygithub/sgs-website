import { motion } from "framer-motion";

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1 },
  },
  "zoom-out": {
    hidden: { opacity: 0, scale: 1.2 },
    show: { opacity: 1, scale: 1 },
  },
};

const AnimateOnScroll = ({ children, type = "fade-up", delay = 0 }) => {
  return (
    <motion.div
      variants={variants[type]}
      initial="hidden"
      whileInView="show" // 👈 auto animate whenever visible
      viewport={{ amount: 0.2 }} // 👈 trigger sensitivity
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
