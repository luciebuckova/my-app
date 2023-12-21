import Header from '@/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
}
