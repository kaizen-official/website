const LOGOS = [
  { name: "SAP", src: "/logos/sap.svg", h: 22 },
  { name: "Oracle", src: "/logos/oracle.svg", h: 20 },
  { name: "Tally", src: "/logos/tally.svg", h: 40 },
  { name: "Odoo", src: "/logos/odoo.svg", h: 24 },
  { name: "Zoho", src: "/logos/zoho.svg", h: 22 },
];

export default function IntegrationLogos({ className = "" }) {
  return (
    <ul
      className={`grid grid-cols-3 items-center gap-2 sm:grid-cols-5 ${className}`}
    >
      {LOGOS.map((logo) => (
        <li key={logo.name} className="logo-cell">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            loading="lazy"
            decoding="async"
            style={{ height: `${logo.h}px` }}
          />
        </li>
      ))}
    </ul>
  );
}
