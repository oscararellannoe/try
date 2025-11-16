import { ReactNode } from 'react';

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  lead?: ReactNode;
}

export default function SectionIntro({ eyebrow, title, description, align = 'center', lead }: SectionIntroProps) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="text-xs uppercase tracking-[0.6em] text-night/50">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black text-night sm:text-5xl">{title}</h2>
      {description && <p className="mt-3 text-lg text-night/70">{description}</p>}
      {lead && <div className="mt-6 text-night/80">{lead}</div>}
    </div>
  );
}
