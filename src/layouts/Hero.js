import { Element, Link as ScrollLink } from "react-scroll";
import UseSwitchesCustom from "@/components/UseSwitchesCustom";
import { IconBrandGithub } from "@tabler/icons-react";
import SocialIcon from "@/components/SocialIcon";

export default function Hero() {
  return (
    <Element name="hero" className="relative min-h-screen py-32">
      <div className="absolute left-1/2 top-8 -translate-x-[50%]">
        <UseSwitchesCustom />
      </div>
      <h1>Lucie Bučková</h1>
      <h2 className="text-3xl font-medium">frontend kodérka</h2>
      <ul className="my-4 grid place-content-center">
        <SocialIcon link="https://github.com/luciebuckova">
          <IconBrandGithub />
        </SocialIcon>
      </ul>
      <p>
        Jsem junior frontend kodérka. Zamilovala jsem si zejména tvorbu webů
        kombinací React a Tailwind CSS. Neustále na sobě pracuji a&nbsp;snažím
        se nejen v tomto směru posouvat vpřed.
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
    </Element>
  );
}
