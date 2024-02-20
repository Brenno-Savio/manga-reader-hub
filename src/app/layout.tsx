import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Manga Libertas',
  description: 'A manga Hub website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <main className="font-normal">
            <Header />
            <div className="py-32 min-[280px]:py-48 min-[768px]:py-36">
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
