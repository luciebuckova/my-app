import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import SocialIcon from "./SocialIcon";

const date = new Date();
let year = date.getFullYear();

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 text-center">
      <ul className="flex items-center gap-4">
        <SocialIcon link="https://github.com/luciebuckova">
          <IconBrandGithub size={28} stroke={1} />
        </SocialIcon>
        <SocialIcon link="https://www.linkedin.com/in/luciebuckova/">
          <IconBrandLinkedin size={28} stroke={1} />
        </SocialIcon>
        <SocialIcon link="https://www.facebook.com/l.lucie.b">
          <IconBrandFacebook size={28} stroke={1} />
        </SocialIcon>
      </ul>
      <div>
        <span>&copy; 2023 - {year} Lucie Bučková</span>
      </div>
    </footer>
  );
}
