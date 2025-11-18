interface IconProps {
  className?: string;
}

export function ConvertibleIcon({ className = "w-24 h-24" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 35 L20 25 L30 20 L70 20 L80 25 L85 35" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M10 35 L90 35 L88 45 L12 45 Z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1"/>
      <circle cx="25" cy="45" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="75" cy="45" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <line x1="30" y1="25" x2="50" y2="25" stroke="white" strokeWidth="2" opacity="0.6"/>
      <line x1="55" y1="25" x2="75" y2="25" stroke="white" strokeWidth="2" opacity="0.6"/>
    </svg>
  );
}

export function CoupeIcon({ className = "w-24 h-24" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 38 L22 28 L35 23 L50 23 L65 23 L78 28 L85 38" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M10 38 L90 38 L88 48 L12 48 Z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1"/>
      <circle cx="25" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="75" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M35 23 L38 28 L62 28 L65 23" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <line x1="40" y1="28" x2="60" y2="28" stroke="white" strokeWidth="1.5" opacity="0.4"/>
    </svg>
  );
}

export function HatchbackIcon({ className = "w-24 h-24" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 38 L22 28 L35 23 L55 23 L65 28 L70 33 L70 38" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M70 33 L75 38" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M10 38 L85 38 L83 48 L12 48 Z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1"/>
      <circle cx="25" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="70" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M35 23 L38 28 L52 28 L55 23" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <path d="M57 25 L60 28 L68 28 L70 33" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
    </svg>
  );
}

export function LuxuryIcon({ className = "w-24 h-24" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 37 L20 28 L32 23 L68 23 L80 28 L85 37" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M10 37 L90 37 L88 48 L12 48 Z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1"/>
      <circle cx="25" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="75" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M32 23 L35 28 L48 28 L50 23" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <path d="M52 23 L54 28 L65 28 L68 23" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <line x1="20" y1="40" x2="30" y2="40" stroke="white" strokeWidth="1.5" opacity="0.4"/>
    </svg>
  );
}

export function MinivanIcon({ className = "w-24 h-24" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 38 L20 25 L30 20 L70 20 L80 25 L85 38" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M10 38 L90 38 L88 48 L12 48 Z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1"/>
      <circle cx="25" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="75" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M30 20 L33 25 L43 25 L45 20" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <path d="M48 20 L50 25 L60 25 L62 20" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <path d="M65 20 L67 25 L77 25 L80 25" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <line x1="46" y1="25" x2="46" y2="38" stroke="white" strokeWidth="1.5" opacity="0.3"/>
      <line x1="63" y1="25" x2="63" y2="38" stroke="white" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
}

export function PickupIcon({ className = "w-24 h-24" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 38 L20 28 L30 23 L45 23 L50 28 L50 38" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M50 23 L85 23 L85 38" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M10 38 L90 38 L88 48 L12 48 Z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1"/>
      <circle cx="25" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="75" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M30 23 L33 28 L47 28 L50 28" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <line x1="55" y1="28" x2="80" y2="28" stroke="white" strokeWidth="1.5" opacity="0.3"/>
      <line x1="55" y1="33" x2="80" y2="33" stroke="white" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
}

export function SUVIcon({ className = "w-24 h-24" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 36 L20 24 L32 19 L68 19 L80 24 L85 36" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M10 36 L90 36 L88 48 L12 48 Z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1"/>
      <circle cx="25" cy="48" r="7" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="75" cy="48" r="7" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M32 19 L35 24 L47 24 L50 19" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <path d="M52 19 L54 24 L65 24 L68 19" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <line x1="37" y1="24" x2="37" y2="36" stroke="white" strokeWidth="1.5" opacity="0.3"/>
      <line x1="51" y1="24" x2="51" y2="36" stroke="white" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
}

export function SedanIcon({ className = "w-24 h-24" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 38 L20 30 L30 25 L45 25 L55 25 L70 25 L80 30 L85 38" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M10 38 L90 38 L88 48 L12 48 Z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1"/>
      <circle cx="25" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="75" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M30 25 L33 30 L42 30 L45 25" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <path d="M48 25 L50 30 L67 30 L70 25" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
    </svg>
  );
}

export function WagonIcon({ className = "w-24 h-24" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 37 L20 27 L32 22 L68 22 L75 27 L75 37" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M75 27 L80 32 L82 37" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M10 37 L87 37 L85 48 L12 48 Z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1"/>
      <circle cx="25" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="72" cy="48" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M32 22 L35 27 L47 27 L50 22" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <path d="M52 22 L54 27 L73 27 L75 27" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.05"/>
      <line x1="49" y1="27" x2="49" y2="37" stroke="white" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
}
