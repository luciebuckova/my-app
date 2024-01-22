import { Element, Link as ScrollLink } from "react-scroll";
import UseSwitchesCustom from "@/components/UseSwitchesCustom";

export default function Hero() {
  return (
    <Element name="hero" className="relative min-h-screen py-32">
      <div className="absolute left-1/2 top-8 -translate-x-[50%]">
        <UseSwitchesCustom />
      </div>
      <h1>Lucie Bučková</h1>
      <h2 className="text-3xl font-medium">frontend kodérka</h2>
      <p>
        Naději k je polohách by dotkne část. Víc terčem už dobrodruzi, ne mé
        hloupé k souvislosti přepravy, už špatného změnami dálný, buňky by
        skutečně indickým, petr začaly východě.
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
          O mně
        </ScrollLink>
      </div>
    </Element>
  );
}
