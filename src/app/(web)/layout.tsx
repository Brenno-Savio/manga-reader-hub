import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextAuthProvider from '@/components/AuthProvider/AuthProvider';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ThemeButton from '@/components/ThemeButton/ThemeButton';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Novel Libertas',
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
        <NextAuthProvider>
          <ThemeProvider>
            <main className="font-normal">
              <Header />
              <div className="justify-end py-32 min-[280px]:py-48 min-[768px]:py-36">
                {children}
                <div className='flex justify-end absolute items-end  z-20 right-1 p-10'>
                <ThemeButton />
                </div>
              </div>
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
