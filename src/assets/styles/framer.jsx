import React from 'react';
import { motion } from 'framer-motion';

export const Slideup = ({ children, delay = 0, className = '' }) => (
	<motion.div
		initial={{ opacity: 0, y: 100 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 1, delay }}
		className={className}
	>
		{children}
	</motion.div>
);

export const Slideleft = ({ children, delay = 0, className = '' }) => (
	<motion.div
		initial={{ opacity: 0, x: -100 }}
		whileInView={{ opacity: 1, x: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 1, delay }}
		className={className}
	>
		{children}
	</motion.div>
);

export const Slideright = ({ children, delay = 0, className = '' }) => (
	<motion.div
		initial={{ opacity: 0, x: 100 }}
		whileInView={{ opacity: 1, x: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 1, delay }}
		className={className}
	>
		{children}
	</motion.div>
);

export const BounceRotate = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
    whileInView={{
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerFade = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.3,
          delayChildren: delay
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const RevealText = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
    whileInView={{
      opacity: 1,
      clipPath: 'inset(0 0 0 0)'
    }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ElasticWobble = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{
      opacity: 1,
      scale: 1,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 1,
        delay
      }
    }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);