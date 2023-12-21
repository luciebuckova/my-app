import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <ul className="flex flex-col gap-6 md:flex-row md:gap-12">
        <li class="group">
          <Link href="/">Home</Link>
          <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
        <li class="group">
          <Link href="/about">About</Link>
          <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
        <li class="group">
          <Link href="/projects">Projects</Link>
          <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
        <li class="group">
          <Link href="/contact">Contact</Link>
          <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-teal-400 group-hover:opacity-100"></div>
        </li>
      </ul>
    </div>
  );
}
