import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KiranaKart - Your Trusted Online Grocery Store',
  description: 'Shop from over 10,000+ products and get them delivered within hours. Trusted by 100,000+ customers nationwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        <Script id="aos-init">
          {`
            AOS.init({
              duration: 800,
              once: true,
            });
          `}
        </Script>
      </body>
    </html>
  );
}