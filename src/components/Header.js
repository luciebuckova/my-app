import Link from "next/link";
import { IconX } from "@tabler/icons-react";
import { IconMenuDeep } from "@tabler/icons-react";
import { useState } from "react";

const menu = [
  {
    id: 0,
    title: "Úvod",
    url: "#hero",
  },
  {
    id: 1,
    title: "O mně",
    url: "#about",
  },
  {
    id: 2,
    title: "Projekty",
    url: "#projects",
  },
  {
    id: 3,
    title: "Kontakt",
    url: "#contact",
  },
];

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const menuItems = menu.map((item) => (
    <li key={item.id} className="group">
      <Link onClick={() => setShowNav(false)} href={item.url}>
        {item.title}
      </Link>
      <div className="mx-2 mt-2 border-b-2  border-purple-600 opacity-0 duration-500 group-hover:opacity-100"></div>
    </li>
  ));

  return (
    <header>
      <button
        className="fixed right-8 top-8 z-20"
        onClick={() => setShowNav(true)}
      >
        <IconMenuDeep size={40} />
      </button>
      {showNav && (
        <nav className="fixed right-0 top-0 z-30 flex h-full w-72 items-start justify-center bg-gradient-to-b from-neutral-50 to-transparent px-5 py-20 text-center text-xl font-light md:text-2xl dark:from-neutral-950 dark:to-transparent">
          <button
            className="absolute right-8 top-8"
            onClick={() => setShowNav(false)}
          >
            <IconX size={40} />
          </button>
          <ul className="flex flex-col gap-6">{menuItems}</ul>
        </nav>
      )}
    </header>
  );
}
