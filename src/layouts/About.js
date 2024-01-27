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
    <Element name="about" className="relative py-32">
      <h2>O mně</h2>
      <p>
        Vystudovala jsem obor zubní lékařství, což v mém případě byl ale krok
        špatným směrem, který se teď ze všech sil snažím napravit.
      </p>
      <p>
        S vývojem webových stránek jsem se poprvé setkala asi ve 14 letech na
        gymnáziu, už tehdy mě tyto technologie nadchly a ve svém volném čase
        jsem dokonce vytvořila vlastní webové stránky. Tím to bohužel skončilo.
        O více než 20 let později jsem se rozhodla, že to dávné nadšení zkusím
        znovu vzkřísit a začátkem roku 2023 jsem se pustila do studia{" "}
        <strong>HTML a CSS</strong>.
      </p>
      <p>
        Absolvovala jsem kurz <strong>Staň se kodérkou</strong> od Czechitas,
        kde jsem se naučila tvořit komplexní, responzivní webové stránky pomocí
        HTML a CSS. Znám obecně nejpoužívanější metodiku BEM a umím používat
        preprocesor <strong>Sass</strong>. Od té doby, co jsem poznala Tailwind
        CSS, všek obojí zmiňované používám méně. Zvládám základní práci s Gitem
        a také tvorbu jednodušší grafiky, ať už jde o návrh webu ve{" "}
        <strong>Figmě</strong> nebo úpravy grafických podkladů v Adobe
        Photoshop.
      </p>
      <p>
        Dále jsem absolvovala celou řadu delších či kratších kurzů, ve kterých
        jsem se naučila používat další technologie a nástroje.
      </p>
      <h3 className="mt-16">Používané technologie & nástroje</h3>
      <ul className="mx-auto mt-8 grid max-w-xs grid-cols-2 justify-items-center gap-8 p-8 text-purple-600 dark:text-purple-300 md:max-w-xl md:grid-cols-5">
        <li>
          <IconBrandHtml5 size={80} stroke={1} />
          <small>HTML5</small>
        </li>
        <li>
          <IconBrandCss3 size={80} stroke={1} />
          <small>CSS3</small>
        </li>
        <li>
          <IconBrandSass size={80} stroke={1} />
          <small>Sass</small>
        </li>
        <li>
          <IconBrandBootstrap size={80} stroke={1} />
          <small>Bootstrap</small>
        </li>
        <li>
          <IconBrandTailwind size={80} stroke={1} />
          <small>Tailwind</small>
        </li>
        <li>
          <IconBrandJavascript size={80} stroke={1} />
          <small>JavaScript</small>
        </li>
        <li>
          <IconBrandReact size={80} stroke={1} />
          <small>React</small>
        </li>
        <li>
          <IconBrandNextjs size={80} stroke={1} />
          <small>Next.js</small>
        </li>
        <li>
          <IconBrandFigma size={80} stroke={1} />
          <small>Figma</small>
        </li>
        <li>
          <IconBrandGit size={80} stroke={1} />
          <small>Git</small>
        </li>
      </ul>
      <p>
        Aktuálně se učím <strong>React</strong>, který mě ve spojení s{" "}
        <strong>Tailwind CSS</strong> opravdu uchvátil, a zajímají mě možnosti
        využití Javascript animací pomocí knihoven three.js nebo GSAP. Za těch
        více než 20 let se technologie používané ve vývoji webových stránek a
        aplikací rozrostly do takové šíře, že téměř každý den objevím něco
        dalšího, co bych se ráda naučila.
      </p>
    </Element>
  );
}
