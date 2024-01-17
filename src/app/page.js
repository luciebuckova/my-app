"use client";
import DefaultLayout from "@/layouts/DefaultLayout";
import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Projects from "@/layouts/Projects";
import Contact from "@/layouts/Contact";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </DefaultLayout>
  );
}
