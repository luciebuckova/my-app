"use client";
import DefaultLayout from "@/layouts/DefaultLayout";
import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Projects from "@/layouts/Projects";
import Contact from "@/layouts/Contact";
import ScrollToTopOnRefresh from "@/components/ScrollToTopOnRefresh";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <>
      <AnimatedCursor
        color="141, 129, 140"
        innerSize={16}
        outerScale={6}
        showSystemCursor={false}
        trailingSpeed={10}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="checkbox"]',
          "textarea",
          "button",
          ".group",
        ]}
      />
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
