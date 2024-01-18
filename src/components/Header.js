import Link from "next/link";
import { IconX } from "@tabler/icons-react";
import { IconMenuDeep } from "@tabler/icons-react";
import { useState } from "react";
import UseSwitchesCustom from "./UseSwitchesCustom";

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

export default function Header({ toggleMode }) {
  const [showNav, setShowNav] = useState(false);
  const menuItems = menu.map((item) => (
    <li key={item.id} className="group">
      <Link onClick={() => setShowNav(false)} href={item.url}>
        {item.title}
      </Link>
      <div className="mx-2 mt-2 border-b-2  border-teal-400 opacity-0 duration-500 group-hover:opacity-100"></div>
    </li>
  ));

  return (
    <header className="grid place-content-center">
      <UseSwitchesCustom />
      <button
        className="fixed right-8 top-8 z-20 flex items-center justify-center rounded-md border border-neutral-500 bg-neutral-50 p-2 duration-500 hover:scale-105 hover:bg-teal-100 dark:bg-neutral-950 dark:hover:bg-teal-950"
        onClick={() => setShowNav(true)}
      >
        <IconMenuDeep size={24} />
      </button>
      {showNav && (
        <nav className="fixed right-0 top-0 z-30 flex h-full w-64 items-start justify-center bg-gradient-to-b from-teal-100 to-purple-100 px-6 pt-24 text-center text-xl font-light dark:from-teal-950 dark:to-purple-950">
          <button
            className="absolute right-8 top-8 duration-500 hover:scale-95"
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
