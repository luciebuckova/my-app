import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-center items-center text-center md:text-left">
      <ul className="flex flex-col gap-6 md:flex-row md:gap-12">
        <li className="group">
          <Link href="/">Home</Link>
          <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
        <li className="group">
          <Link href="/about">About</Link>
          <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
        <li className="group">
          <Link href="/projects">Projects</Link>
          <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
        <li className="group">
          <Link href="/contact">Contact</Link>
          <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
      </ul>
    </div>
  );
}
