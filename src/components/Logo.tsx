import Link from 'next/link';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
};

const sizeMap: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'text-xs sm:text-sm px-3 py-1',
  md: 'text-base sm:text-lg px-4 py-1.5',
  lg: 'text-xl sm:text-2xl px-6 py-2'
};

export default function Logo({ size = 'md', showTagline = false, className = '' }: LogoProps) {
  return (
    <Link
      href="#hero"
      className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-mangoGreen via-mangoYellow to-mangoOrange text-night font-black tracking-[0.08em] shadow-neon transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mangoYellow ${sizeMap[size]} ${className}`}
    >
      <span className="drop-shadow-[0_4px_12px_rgba(3,31,20,0.4)]">MEGA MANGOS</span>
      {showTagline && (
        <span className="ml-3 hidden text-xs font-semibold uppercase text-night/70 sm:inline-flex">
          <span className="text-mangoOrange">Est.</span> 2012
        </span>
      )}
    </Link>
  );
}
