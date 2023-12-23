import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="text-center">{children}</main>
      <Footer />
    </div>
  );
}
