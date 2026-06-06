function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 11L11 3M11 3H4.5M11 3V9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Sanas-style pill button: label + circular icon badge that rotates on hover.
 * variant: primary | secondary | ghost | on-dark
 */
export default function Pill({
  as = "a",
  variant = "primary",
  children,
  className = "",
  ...rest
}) {
  const Tag = as;
  const variantClass =
    {
      primary: "pill-primary",
      secondary: "pill-secondary",
      ghost: "pill-ghost",
      "on-dark": "pill-on-dark",
    }[variant] || "pill-primary";

  return (
    <Tag className={`pill ${variantClass} ${className}`} {...rest}>
      <span>{children}</span>
      <span className="pill-circle">
        <ArrowIcon />
      </span>
    </Tag>
  );
}
