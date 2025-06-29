import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Portfolio | Fatahul Qorib',
  description: 'Website portfolio pribadi dibuat dengan Next.js dan Tailwind CSS',
};
import Navbar from './components/Navbar'; // ✅ Tambahkan ini
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">
        {children}
      </body>
    </html>
  );
}

