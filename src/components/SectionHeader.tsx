import { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  kicker?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  kicker,
  className = ''
}: SectionHeaderProps) {
  const alignmentClasses =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center items-center'
      : 'text-left';

  return (
    <div className={`section-header flex flex-col gap-3 ${alignmentClasses} ${className}`}>
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.55em] text-night/50">{eyebrow}</p>
        {kicker && <span className="text-xs uppercase tracking-[0.45em] text-mangoOrange">{kicker}</span>}
      </div>
      <h2 className="text-3xl font-black text-night sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="text-base text-night/70 sm:text-lg">{description}</p>}
    </div>
  );
}
