import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";

const date = new Date();
let year = date.getFullYear();

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 pb-8 text-center">
      <ul className="flex items-center gap-4">
        <li className="duration-300 hover:scale-110 hover:text-teal-400">
          <a href="https://github.com/luciebuckova">
            <IconBrandGithub size={28} stroke={1} />
          </a>
        </li>
        <li className="duration-300 hover:scale-110 hover:text-teal-400">
          <a href="https://www.linkedin.com/in/luciebuckova/">
            <IconBrandLinkedin size={28} stroke={1} />
          </a>
        </li>
      </ul>
      <div>
        <span>&copy; 2023 - {year} Lucie Bučková</span>
      </div>
    </footer>
  );
}
