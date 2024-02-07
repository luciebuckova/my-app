import { Element } from "react-scroll";
import Card from "@/components/Card";

export default function Projects() {
  return (
    <Element name="projects" className="min-h-screen py-8 md:py-32">
      <h2>Projekty</h2>
      <p>
        Tady je pár projektů, na kterých jsem pracovala, a také technologie,
        které jsem používala. Více malých i vetších projektů najdete na mém{" "}
        <a
          href="https://github.com/luciebuckova/"
          className="text-teal-400 duration-300 hover:text-purple-600"
        >
          GitHubu
        </a>
        .
      </p>
      <ul className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <li>
          <Card
            title="👆 Tento web"
            description="Můj osobní web vytvořený pomocí Reactu a Next.js, na kterém dále pracuji."
            img="/portfolio.webp"
            linkWeb="https://my-app-henna-two.vercel.app/"
            linkRepo="https://github.com/luciebuckova/my-app"
            stack={["React", "JavaScript", "Tailwind CSS", "Next.js", "MUI"]}
          />
        </li>
        <li>
          <Card
            title="🚲 RTB 2023"
            description="Závěrečný projekt kurzu Staň se kodérkou - webové stránky fiktivního cyklistického závodu."
            img="/rtb.webp"
            linkWeb="https://rtb-race.netlify.app/"
            linkRepo="https://github.com/luciebuckova/final-project"
            stack={["HTML", "SCSS", "Eleventy"]}
          />
        </li>
        <li>
          <Card
            title="🧹 Hodinová nemanželka"
            description="Webové stránky pro služby úklidu v domácnostech."
            img="/nemanzelka.webp"
            linkWeb="https://hodinova-nemanzelka.cz/"
            linkRepo="https://github.com/luciebuckova/nemanzelka"
            stack={["HTML", "SCSS", "JavaScript"]}
          />
        </li>
      </ul>
    </Element>
  );
}
