"use client";
import DefaultLayout from "@/layouts/DefaultLayout";
import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Projects from "@/layouts/Projects";
import Contact from "@/layouts/Contact";
import ScrollToTopOnRefresh from "@/components/ScrollToTopOnRefresh";

export default function Home() {
  return (
    <>
      <ScrollToTopOnRefresh />
      <DefaultLayout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </DefaultLayout>
    </>
  );
}
