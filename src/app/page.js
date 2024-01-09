"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Link from "next/link";

export default function Home() {
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
    <DefaultLayout>
      <motion.section
        id="hero"
        className="relative min-h-screen py-32"
        initial={{ opacity: 0, x: -200 }}
        animate={controls}
      >
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0 }}
        >
          Lucie Bučková
        </motion.h1>
        <motion.h2
          className="text-3xl font-medium"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.5 }}
        >
          frontend kodérka
        </motion.h2>
        <motion.p
          className="mx-auto my-8 max-w-3xl text-xl font-light leading-8 md:text-2xl"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
        >
          Naději k je polohách by dotkne část. Víc terčem už dobrodruzi, ne mé
          hloupé k souvislosti přepravy, už špatného změnami dálný, buňky by
          skutečně indickým, petr začaly východě.
        </motion.p>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 1.5 }}
        >
          <Link
            className="rounded-full border border-teal-400 px-4 py-2 text-xl font-light text-teal-400 duration-500 hover:bg-teal-400 hover:text-white md:text-2xl"
            href="/contact"
          >
            Napište mi
          </Link>
        </motion.div>
      </motion.section>
    </DefaultLayout>
  );
}
