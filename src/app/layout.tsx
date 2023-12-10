import Footer from '~@/_components/Static/Footer';
import Header from '~@/_components/Static/Header';
import { Montserrat } from 'next/font/google';
import { menuItem } from '~@/constants/data';
import type { Metadata } from 'next';
import '~@/styles/globals.css';
import React from 'react';

const mon = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Front-end by sooorq',
  description: 'For ProfInstrument api v01',
  authors: [{ name: 'Danilo', url: 'https://github.com/soorq' }],
  keywords: [
    'next',
    'frontend',
    'Bosch',
    'landing',
    'v01',
    'blog',
    'vizitka',
    'ProfMaster',
    'ProfInstrument',
  ],
  applicationName: 'ProfInstrument',
  generator: 'Next.js',
  category: 'ProfInstrument',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mon.className}>
        <div className="w-full h-full bg-neutral_black_1000">
          <Header data={menuItem} />
          <React.Suspense fallback={<h1>Loading...</h1>}>
            {children}
          </React.Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}
