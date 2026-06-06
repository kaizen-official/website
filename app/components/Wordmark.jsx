/**
 * Prime Meridian Systems wordmark — geometric mark (globe + 0° meridian line)
 * paired with a bold lowercase logotype, echoing Sanas's clean geometric mark.
 */
export default function Wordmark({ className = "", invert = false }) {
  const color = invert ? "#ffffff" : "#0a0a0a";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 28 28"
        fill="none"
        className="h-full w-auto"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="12.5" stroke={color} strokeWidth="2.4" />
        <path d="M14 1.5V26.5" stroke={color} strokeWidth="2.4" />
        <path
          d="M2.2 9.2C6 11 10 12 14 12s8-1 11.8-2.8M2.2 18.8C6 17 10 16 14 16s8 1 11.8 2.8"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="2.6" fill={color} />
      </svg>
      <span
        className="text-[1.15rem] font-semibold tracking-[-0.03em]"
        style={{ color }}
      >
        prime&nbsp;meridian
      </span>
    </span>
  );
}
