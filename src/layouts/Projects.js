import { Element } from "react-scroll";
import Card from "@/components/Card";

export default function Projects() {
  return (
    <Element name="projects" className="relative py-32">
      <h2>Projekty</h2>
      <p>Na této sekci právě pracuji... 🚧</p>
      {/* <ul className="mt-8 grid gap-8 md:grid-cols-3">
        <li>
          <Card front={<p>Projekt 1</p>} back={<p>popis</p>} />
        </li>
        <li>
          <Card front={<p>Projekt 2</p>} back={<p>popis</p>} />
        </li>
        <li>
          <Card front={<p>Projekt 3</p>} back={<p>popis</p>} />
        </li>
        <li>
          <Card front={<p>Projekt 4</p>} back={<p>popis</p>} />
        </li>
        <li>
          <Card front={<p>Projekt 5</p>} back={<p>popis</p>} />
        </li>
        <li>
          <Card front={<p>Projekt 6</p>} back={<p>popis</p>} />
        </li>
      </ul> */}
    </Element>
  );
}
