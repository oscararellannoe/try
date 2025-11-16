import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'MEGA MANGOS — Mango preparado al estilo latino',
  description:
    'Landing page vibrante para MEGA MANGOS: mangos preparados al estilo mexicano y colombiano con delivery por Uber Eats en Houston, Fort Worth, Dallas, New York y California.'
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-sans bg-white text-night antialiased">
        {children}
      </body>
    </html>
  );
}
