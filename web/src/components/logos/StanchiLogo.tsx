type Variant = "light" | "dark";

export function StanchiLogo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: Variant;
}) {
  const primaryGradientId = variant === "light" ? "stanchiGradientLight" : "stanchiGradient";
  const accentColor = variant === "light" ? "#E6F6F8" : "#0F5C74";
  const titleColor = variant === "light" ? "#FFFFFF" : "#0B4F63";
  const subtitleColor = variant === "light" ? "rgba(230,246,248,0.8)" : "rgba(86,110,120,0.75)";

  return (
    <div
      className={`flex items-center gap-3 ${className ?? ""}`.trim()}
      aria-label="Logotipo Stanchi Solução em Seguros"
    >
      <svg viewBox="0 0 72 72" role="img" aria-hidden="true" className="h-14 w-14">
        <defs>
          <linearGradient id="stanchiGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#22AEC3" />
            <stop offset="50%" stopColor="#15799B" />
            <stop offset="100%" stopColor="#0D4260" />
          </linearGradient>
          <linearGradient id="stanchiGradientLight" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#7DE2F5" />
            <stop offset="50%" stopColor="#56BAD4" />
            <stop offset="100%" stopColor="#2F6F8D" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke={`url(#${primaryGradientId})`}
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M36 6 66 36 36 66 6 36Z" />
          <path d="M41 6 66 31 31 66 6 41Z" opacity={0.8} />
          <path d="M36 24 48 36 36 48 24 36Z" />
        </g>
        <rect
          x="32"
          y="32"
          width="8"
          height="8"
          transform="rotate(45 36 36)"
          fill={accentColor}
          opacity={0.95}
        />
      </svg>
      <div className="leading-tight">
        <span
          className="block text-[1.4rem] font-semibold uppercase tracking-[0.18em]"
          style={{ color: titleColor }}
        >
          STANCHI
        </span>
        <span
          className="block text-[0.68rem] uppercase tracking-[0.42em]"
          style={{ color: subtitleColor }}
        >
          solução em seguros
        </span>
      </div>
    </div>
  );
}
