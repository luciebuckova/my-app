import { Element } from "react-scroll";
import { IconBrandHtml5 } from "@tabler/icons-react";
import { IconBrandCss3 } from "@tabler/icons-react";
import { IconBrandSass } from "@tabler/icons-react";
import { IconBrandBootstrap } from "@tabler/icons-react";
import { IconBrandTailwind } from "@tabler/icons-react";
import { IconBrandJavascript } from "@tabler/icons-react";
import { IconBrandReact } from "@tabler/icons-react";
import { IconBrandNextjs } from "@tabler/icons-react";
import { IconBrandFigma } from "@tabler/icons-react";
import { IconBrandGit } from "@tabler/icons-react";

export default function About() {
  return (
    <Element name="about" className="relative min-h-screen py-32">
      <h2>O mně</h2>
      <p>
        Jsem junior frontend kodérka. Zamilovala jsem si zejména tvorbu webů
        kombinací React a Tailwind CSS. Neustále na sobě pracuji a&nbsp;snažím
        se nejen v tomto směru posouvat vpřed.
      </p>
      <h3 className="mt-16">Používané technologie & nástroje</h3>
      <ul className="mx-auto mt-8 grid max-w-xs grid-cols-2 justify-items-center gap-8 p-8 md:max-w-xl md:grid-cols-5">
        <li className="duration-300 hover:scale-105 hover:text-teal-400">
          <IconBrandHtml5 size={80} stroke={1} />
          <small>HTML5</small>
        </li>
        <li className="duration-300 hover:scale-105 hover:text-teal-400">
          <IconBrandCss3 size={80} stroke={1} />
          <small>CSS3</small>
        </li>
        <li className="duration-300 hover:scale-105 hover:text-teal-400">
          <IconBrandSass size={80} stroke={1} />
          <small>Sass</small>
        </li>
        <li className="duration-300 hover:scale-105 hover:text-teal-400">
          <IconBrandBootstrap size={80} stroke={1} />
          <small>Bootstrap</small>
        </li>
        <li className="duration-300 hover:scale-105 hover:text-teal-400">
          <IconBrandTailwind size={80} stroke={1} />
          <small>Tailwind</small>
        </li>
        <li className="duration-300 hover:scale-105 hover:text-teal-400">
          <IconBrandJavascript size={80} stroke={1} />
          <small>JavaScript</small>
        </li>
        <li className="duration-300 hover:scale-105 hover:text-teal-400">
          <IconBrandReact size={80} stroke={1} />
          <small>React</small>
        </li>
        <li className="duration-300 hover:scale-105 hover:text-teal-400">
          <IconBrandNextjs size={80} stroke={1} />
          <small>Next.js</small>
        </li>
        <li className="duration-300 hover:scale-105 hover:text-teal-400">
          <IconBrandFigma size={80} stroke={1} />
          <small>Figma</small>
        </li>
        <li className="duration-300 hover:scale-105 hover:text-teal-400">
          <IconBrandGit size={80} stroke={1} />
          <small>Git</small>
        </li>
      </ul>
    </Element>
  );
}
