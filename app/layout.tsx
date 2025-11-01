import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Your global styles
import Navbar from '@/app/Navbar'; // Import the client component
import Footer from '@/app/Footer'; // Import the footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JusCode - The Ultimate Platform for Coders',
  description:
    'Learn to code, practice problems, and compete in competitions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar is rendered at the top */}
        <Navbar />

        {/* Your page content (e.g., page.tsx) is rendered here */}
        <main>{children}</main>

        {/* Footer is rendered at the bottom */}
        <Footer />
      </body>
    </html>
  );
}