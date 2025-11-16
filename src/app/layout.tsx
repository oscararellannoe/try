import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'PulseFlow — Experiencias digitales del futuro',
  description:
    'Landing page minimalista 2025 creada con Next.js, Tailwind y Framer Motion. Perfecta para productos SaaS visionarios.'
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body className="font-sans bg-night text-white antialiased">
        {children}
      </body>
    </html>
  );
}
