import { Element, Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <Element name="hero" className="relative min-h-screen py-32">
      <h1>Lucie Bučková</h1>
      <h2 className="text-3xl font-medium">frontend kodérka</h2>
      <p className="mx-auto my-8 max-w-3xl text-xl font-light leading-8 md:text-2xl">
        Naději k je polohách by dotkne část. Víc terčem už dobrodruzi, ne mé
        hloupé k souvislosti přepravy, už špatného změnami dálný, buňky by
        skutečně indickým, petr začaly východě.
      </p>
      <div>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={1000}
          className="rounded-xl border border-purple-600 bg-neutral-50 px-4 py-2 text-xl font-light text-purple-600 duration-500 hover:bg-purple-600 hover:text-neutral-50 dark:bg-neutral-950 dark:hover:bg-purple-600 md:text-2xl"
          href="#contact"
        >
          Napište mi
        </ScrollLink>
      </div>
    </Element>
  );
}
