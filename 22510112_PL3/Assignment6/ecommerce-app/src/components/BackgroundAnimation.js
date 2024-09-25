import React from 'react';
import { motion } from 'framer-motion';
const TRANSITION = {
  duration: 2,
  ease: 'linear',
};
export const varColor2x = {
  animate: {
    background: ['#C4D7FF','#87A2FF'],
    transition: TRANSITION,
  },
};
// ... (similar code for other variants)
const BackgroundAnimation = ({ variant }) => {
  return (
    <motion.div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      variants={variant}
      initial="initial"
      animate="animate"
    />
  );
};
export default BackgroundAnimation;