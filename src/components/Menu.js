import { Link as ScrollLink } from "react-scroll";
import UseSwitchesCustom from "@/components/UseSwitchesCustom";

export default function Menu() {
  return (
    <nav className="fixed left-0 right-0 top-0 py-4 text-center text-xl font-light backdrop-blur-lg">
      <ul className="mx-auto flex max-w-7xl items-center justify-center gap-6">
        <li className="group cursor-pointer">
          <ScrollLink
            activeClass="active"
            spy={true}
            to="hero"
            smooth={true}
            duration={800}
          >
            Úvod
          </ScrollLink>
          <div className="mx-2 mt-2 border-b-2  border-teal-400 opacity-0 duration-500 group-hover:opacity-100"></div>
        </li>
        <li className="group cursor-pointer">
          <ScrollLink
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            duration={800}
          >
            O mně
          </ScrollLink>
          <div className="mx-2 mt-2 border-b-2  border-teal-400 opacity-0 duration-500 group-hover:opacity-100"></div>
        </li>
        <li className="group cursor-pointer">
          <ScrollLink
            activeClass="active"
            spy={true}
            to="projects"
            smooth={true}
            duration={800}
          >
            Projekty
          </ScrollLink>
          <div className="mx-2 mt-2 border-b-2  border-teal-400 opacity-0 duration-500 group-hover:opacity-100"></div>
        </li>
        <li className="group cursor-pointer">
          <ScrollLink
            activeClass="active"
            spy={true}
            to="contact"
            smooth={true}
            duration={800}
          >
            Kontakt
          </ScrollLink>
          <div className="mx-2 mt-2 border-b-2  border-teal-400 opacity-0 duration-500 group-hover:opacity-100"></div>
        </li>
        <li>
          <UseSwitchesCustom />
        </li>
      </ul>
    </nav>
  );
}
