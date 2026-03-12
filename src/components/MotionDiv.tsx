import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

const defaultVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const defaultTransition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
};

export const MotionDiv = ({ children, ...props }: MotionDivProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={props.variants || defaultVariants}
      transition={props.transition || defaultTransition}
      {...props}
    >
      {children}
    </motion.div>
  );
};
