import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";

const date = new Date();
let year = date.getFullYear();

function SocialIcon({ children, link }) {
  return (
    <li className="z-50 duration-200 hover:scale-110 hover:text-teal-400">
      <a href={link}>{children}</a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 text-center">
      <ul className="flex items-center gap-4">
        <SocialIcon link="https://github.com/luciebuckova">
          <IconBrandGithub />
        </SocialIcon>
        <SocialIcon link="https://www.linkedin.com/in/luciebuckova/">
          <IconBrandLinkedin />
        </SocialIcon>
        <SocialIcon link="https://www.facebook.com/l.lucie.b">
          <IconBrandFacebook />
        </SocialIcon>
      </ul>
      <div>
        <p>&copy; 2023 - {year} Lucie Bučková</p>
      </div>
    </footer>
  );
}
