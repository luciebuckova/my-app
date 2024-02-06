import { Element } from "react-scroll";
import Card from "@/components/Card";

export default function Projects() {
  return (
    <Element name="projects" className="min-h-screen py-8 md:py-32">
      <h2>Projekty</h2>
      <p>Na této sekci právě pracuji... 🚧</p>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <li>
          <Card
            title="Závěrečný projekt kurzu Staň se kodérkou"
            bg="bg-[url('/rtb.webp')]"
            linkWeb="https://rtb-race.netlify.app/"
            linkRepo="https://github.com/luciebuckova/final-project"
          />
        </li>
        <li>
          <Card
            title="Hodinová nemanželka"
            bg="bg-[url('/nemanzelka.webp')]"
            linkWeb="https://hodinova-nemanzelka.cz/"
            linkRepo="https://github.com/luciebuckova/nemanzelka"
          />
        </li>
        <li>
          <Card
            title="Simon Game"
            bg="bg-[url('/simon-game.webp')]"
            linkWeb="https://luciebuckova.github.io/simon-game/"
            linkRepo="https://github.com/luciebuckova/simon-game"
          />
        </li>
      </ul>
    </Element>
  );
}
