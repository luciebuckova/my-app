import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const menuItems = menu.map((item) => (
    <li key={item.id} className="group">
      <Link href={item.url}>{item.title}</Link>
      <div className="mx-2 mt-2 border-b-2 border-teal-400 opacity-0 duration-500 group-hover:opacity-100"></div>
    </li>
  ));

  return (
    <header className="flex items-center justify-center text-center text-xl font-light md:text-left md:text-2xl">
      <ul className="flex flex-col gap-6 md:flex-row md:gap-12">{menuItems}</ul>
    </header>
  );
}
