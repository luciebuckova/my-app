'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import Link from 'next/link';

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 1,
      },
    });
  }, [controls]);

  return (
    <div className="p-8 container max-w-7xl mx-auto">
      <DefaultLayout>
        <motion.section
          id="hero"
          className="min-h-screen py-32 relative"
          initial={{ opacity: 0, x: -200 }}
          animate={controls}>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 1, delay: 0 }}>
            Lucie Bučková
          </motion.h1>
          <motion.h2
            className="text-3xl font-medium"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 1, delay: 0.5 }}>
            frontend kodérka
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl leading-8 font-light max-w-3xl my-8 mx-auto"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 1, delay: 1 }}>
            Naději k je polohách by dotkne část. Víc terčem už dobrodruzi, ne mé
            hloupé k souvislosti přepravy, už špatného změnami dálný, buňky by
            skutečně indickým, petr začaly východě.
          </motion.p>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 1, delay: 1.5 }}>
            <Link
              className="px-4 py-2 text-xl md:text-2xl font-light rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white duration-500"
              href="/contact">
              Napište mi
            </Link>
          </motion.div>
        </motion.section>
      </DefaultLayout>
    </div>
  );
}
