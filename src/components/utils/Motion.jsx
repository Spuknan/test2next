"use client";

import { motion } from 'framer-motion';

const animations = {
  fadeIn: {
    initial: { opacity: 0, display: "flex" },
    animate: { opacity: 1, opacity: 1 },
  },
  fadeOut: {
    initial: { opacity: 1, display: "flex" },
    animate: { opacity: 0, opacity: 1 },
  },
  rotateFull: {
    initial: { rotate: 0, opacity: 0, display: "flex" },
    animate: { rotate: 360, opacity: 1 },
  },
  swipeUp: {
    initial: { y: "100%", opacity: 0, display: "flex" },
    animate: { y: 0, opacity: 1 },
  },
  swipeDown: {
    initial: { y: "-100%", opacity: 0, display: "flex" },
    animate: { y: 0, opacity: 1 },
  },
  swipeLeft: {
    initial: { x: "100%", opacity: 0, display: "flex" },
    animate: { x: 0, opacity: 1 },
  },
  swipeRight: {
    initial: { x: "-100%", opacity: 0, display: "flex" },
    animate: { x: 0, opacity: 1 },
  },
};

const Motion = ({ children, animation, delay }) => {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.animate}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  )

}

export default Motion;
