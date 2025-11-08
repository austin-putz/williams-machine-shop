import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Williams Machine Shop, Inc. | Steel Fabrication & Machining - Lacona, Iowa',
  description: 'Full-service steel fabrication and machining shop in Lacona, Iowa. Specializing in farm equipment repair, custom fabrication, powder coating, and more since 1991.',
  keywords: 'machine shop, steel fabrication, Lacona Iowa, powder coating, welding, metal fabrication',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
