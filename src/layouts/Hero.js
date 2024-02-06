import { Element, Link as ScrollLink } from "react-scroll";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

export default function Hero() {
  return (
    <Element name="hero" className="min-h-screen py-8 md:py-32">
      <section>
        <Image
          priority={true}
          src="/ccclaymoji.svg"
          width={350}
          height={350}
          alt="Picture of the author"
          className="mx-auto"
        />
        <h1>Lucie Bučková</h1>
        <h3>junior frontend kodérka</h3>
        <div className="my-4 grid place-content-center">
          <a
            href="https://github.com/luciebuckova"
            className="duration-300 hover:scale-110 hover:text-teal-400"
          >
            <IconBrandGithub size={32} stroke={1} />
          </a>
        </div>
        <p className="text-xl md:text-2xl">
          Jsem bývalá zubní lékařka na cestě stát se frontend vývojářkou.
          Neustále pracuji na svém profesním růstu, věnuji se novým výzvám a
          snažím se posouvat své dovednosti na vyšší úroveň. Hledám příležitost
          v oblasti frontend vývoje, kde bych mohla využít své nadšení a dále se
          zlepšovat v tom, co mě baví.
        </p>
        <div className="mx-auto flex max-w-sm flex-col justify-center gap-8 sm:flex-row">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={1000}
            className="btn-primary sm:w-1/2"
            href="#contact"
          >
            Napište mi
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={1000}
            className="btn-secondary sm:w-1/2"
            href="#about"
          >
            Více o mně
          </ScrollLink>
        </div>
      </section>
    </Element>
  );
}
