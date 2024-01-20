import Menu from "./Menu";
import { IconMenuDeep } from "@tabler/icons-react";
import { useState } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header>
      <button
        className="fixed right-8 top-8 z-20 flex items-center justify-center rounded-md border border-neutral-500 bg-neutral-50 p-2 duration-500 hover:scale-105 hover:bg-teal-100 dark:bg-neutral-950 dark:hover:bg-teal-950"
        onClick={() => setShowNav(true)}
      >
        <IconMenuDeep size={24} />
      </button>
      {showNav && <Menu setShowNav={setShowNav} />}
    </header>
  );
}
