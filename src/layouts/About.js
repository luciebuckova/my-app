import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    });
  }, [controls]);
  return (
    <motion.section
      id="about"
      className="relative min-h-screen py-32"
      initial={{ opacity: 0, x: -200 }}
      animate={controls}
    >
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0 }}
      >
        O mně
      </motion.h1>
    </motion.section>
  );
}
