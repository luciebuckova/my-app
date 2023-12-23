import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center text-center text-xl md:text-2xl font-light md:text-left">
      <ul className="flex flex-col gap-6 md:flex-row md:gap-12">
        <li className="group">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Úvod
          </Link>
          <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
        <li className="group">
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            O mně
          </Link>
          <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
        <li className="group">
          <Link
            href="/projects"
            className={pathname === '/projects' ? 'active' : ''}>
            Projekty
          </Link>
          <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
        <li className="group">
          <Link
            href="/contact"
            className={pathname === '/contact' ? 'active' : ''}>
            Kontakt
          </Link>
          <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
      </ul>
    </div>
  );
}
