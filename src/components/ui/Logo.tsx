interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-baseline gap-1 ${className}`}>
      <span className="font-extrabold tracking-tight text-white">PLAY</span>
      <span className="font-extrabold tracking-tight text-pz-purple">Z</span>
    </span>
  );
}
