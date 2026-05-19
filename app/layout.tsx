import '../styles/globals.css';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Lovaly Dream Resort',
  description: 'Your Ultimate Getaway for Stay, Dine & Relax in Rohtas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-dark-tone text-light-accent font-sans">
        {children}
      </body>
    </html>
  );
}