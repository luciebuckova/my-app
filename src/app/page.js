import DefaultLayout from '@/layouts/DefaultLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8 container max-w-7xl mx-auto">
      <DefaultLayout>
        <section id="hero" className="h-screen py-32 relative">
          <h1>Lucie Bučková</h1>
          <h2 className="text-3xl font-medium">frontend kodérka</h2>
          <Image
            src="/sssplatter.svg"
            width={300}
            height={300}
            alt="blob"
            className="absolute -top-6 -left-20 -z-10"
          />
          <p className="text-lg max-w-3xl my-8">
            Naději k je polohách by dotkne část. Víc terčem už dobrodruzi, ne mé
            hloupé k souvislosti přepravy, už špatného změnami dálný, buňky by
            skutečně indickým, petr začaly východě.{' '}
          </p>
          <div>
            <Link
              className="px-4 py-2 rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white"
              href="/contact">
              Napište mi
            </Link>
          </div>
        </section>
      </DefaultLayout>
    </div>
  );
}
