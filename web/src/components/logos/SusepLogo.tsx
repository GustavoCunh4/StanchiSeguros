export function SusepLogo({ className }: { className?: string }) {
  const containerClass = `flex items-center gap-3 ${className ?? ""}`.trim();

  return (
    <div className={containerClass} aria-label="Logotipo SUSEP">
      <svg viewBox="0 0 68 68" role="img" aria-hidden="true" className="h-12 w-12">
        <path
          d="M26 6 38 18 26 30 14 18Z"
          fill="#0B6E4F"
          stroke="#0B6E4F"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M38 18 50 6 62 18 50 30Z"
          fill="#F7C948"
          stroke="#F7C948"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14 30 26 42 14 54 2 42Z"
          fill="#F7C948"
          stroke="#F7C948"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M38 42 50 30 62 42 50 54Z"
          fill="#F7C948"
          stroke="#F7C948"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <div className="leading-tight text-[#0B6E4F]">
        <span className="block text-xl font-black tracking-tight uppercase">SUSEP</span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0B6E4F]/80">
          Superintendncia de Seguros Privados
        </span>
      </div>
    </div>
  );
}
