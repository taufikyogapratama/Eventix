export function HeroImage() {
  return (
    <svg
      viewBox="0 0 480 380"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="tkMain"
          x1="80"
          y1="100"
          x2="300"
          y2="290"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" className="text-primary" stopColor="currentColor" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient
          id="tkBack"
          x1="104"
          y1="112"
          x2="400"
          y2="288"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            className="text-primary"
            stopColor="currentColor"
            stopOpacity={0.3}
          />
          <stop
            offset="1"
            className="text-primary"
            stopColor="currentColor"
            stopOpacity={0.05}
          />
        </linearGradient>
        <radialGradient id="tkGlow" cx="0.5" cy="0.5" r="0.5">
          <stop
            offset="0"
            className="text-primary"
            stopColor="currentColor"
            stopOpacity={0.24}
          />
          <stop
            offset="1"
            className="text-primary"
            stopColor="currentColor"
            stopOpacity={0}
          />
        </radialGradient>
        <clipPath id="tkFrontClip">
          <rect x="80" y="100" width="320" height="190" rx="20" />
        </clipPath>
      </defs>

      {/* Glow & Bayangan Bawah */}
      <ellipse cx="240" cy="200" rx="205" ry="150" fill="url(#tkGlow)" />
      <ellipse
        cx="240"
        cy="318"
        rx="152"
        ry="12"
        className="fill-foreground opacity-[0.07]"
      />

      {/* Kartu Belakang */}
      <g transform="rotate(-8 240 195)">
        <rect
          x="104"
          y="112"
          width="296"
          height="176"
          rx="18"
          fill="url(#tkBack)"
          className="stroke-primary/25"
        />
      </g>

      {/* Kartu Tiket Utama */}
      <g transform="rotate(4 240 195)">
        <rect
          x="80"
          y="100"
          width="320"
          height="190"
          rx="20"
          className="fill-card stroke-border"
        />

        {/* Sisi Kiri Ungu */}
        <g clipPath="url(#tkFrontClip)">
          <rect x="80" y="100" width="220" height="190" fill="url(#tkMain)" />
          <path d="M80 100 H200 L120 290 H80 Z" fill="#ffffff" opacity="0.06" />
          <circle
            cx="196"
            cy="196"
            r="68"
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.14}
            strokeWidth={1.5}
          />
          <circle
            cx="196"
            cy="196"
            r="46"
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.1}
            strokeWidth={1.5}
          />
          <path
            d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
            transform="translate(158 157) scale(3.2)"
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.55}
            strokeWidth={0.9}
            strokeLinejoin="round"
          />
          <path
            d="M13 5v2M13 17v2M13 11v2"
            transform="translate(158 157) scale(3.2)"
            stroke="#ffffff"
            strokeOpacity={0.55}
            strokeWidth={0.9}
            strokeLinecap="round"
          />
          <circle cx="136" cy="148" r="3.5" fill="#ffffff" opacity="0.22" />
          <circle cx="258" cy="246" r="4.5" fill="#ffffff" opacity="0.16" />
        </g>

        {/* Garis Potong Putus-putus */}
        <line
          x1="300"
          y1="114"
          x2="300"
          y2="276"
          className="stroke-muted-foreground opacity-50"
          strokeWidth={1.6}
          strokeDasharray="4 5"
        />

        {/* Garis Barcode */}
        <g className="fill-foreground opacity-60">
          <rect x="322" y="156" width="3" height="78" />
          <rect x="328" y="156" width="2" height="78" />
          <rect x="333" y="156" width="4" height="78" />
          <rect x="340" y="156" width="2" height="78" />
          <rect x="345" y="156" width="3" height="78" />
          <rect x="351" y="156" width="2" height="78" />
          <rect x="356" y="156" width="4" height="78" />
          <rect x="363" y="156" width="2" height="78" />
          <rect x="368" y="156" width="3" height="78" />
          <rect x="374" y="156" width="2" height="78" />
          <rect x="379" y="156" width="3" height="78" />
        </g>

        {/* Lubang Sobekan Atas & Bawah */}
        <circle cx="300" cy="100" r="12" className="fill-background" />
        <circle cx="300" cy="290" r="12" className="fill-background" />
      </g>

      {/* Ornamen Bintang & Titik */}
      <g className="fill-primary opacity-55">
        <path
          d="M0 -9 L2.2 -2.2 L9 0 L2.2 2.2 L0 9 L-2.2 2.2 L-9 0 L-2.2 -2.2 Z"
          transform="translate(398 74)"
        />
        <circle cx="66" cy="300" r="4.5" />
      </g>

      <path
        d="M0 -7 L1.7 -1.7 L7 0 L1.7 1.7 L0 7 L-1.7 1.7 L-7 0 L-1.7 -1.7 Z"
        transform="translate(414 300)"
        fill="#f59e0b"
        opacity="0.75"
      />
      <circle cx="74" cy="88" r="5" fill="#f59e0b" opacity="0.5" />
    </svg>
  );
}
