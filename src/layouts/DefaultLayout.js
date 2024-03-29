import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="container mx-auto max-w-7xl px-8">
      <Header />
      <main className="text-center">{children}</main>
      <Footer />
    </div>
  );
}
