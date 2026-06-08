import Link from "next/link";
import Reveal from "./Reveal";

export default function SectionTeaser({
  id,
  label,
  title,
  description,
  href,
  linkText,
  dark = false,
  children,
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t px-5 py-20 md:py-28 ${
        dark
          ? "border-night-line bg-night text-white"
          : "border-line bg-bg"
      }`}
    >
      <div className="mx-auto max-w-336">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className={`mono-label mb-4 ${dark ? "text-white/45" : ""}`}>
              {label}
            </p>
            <h2 className="display text-balance text-4xl md:text-5xl">{title}</h2>
            <p
              className={`mt-5 max-w-lg text-lg leading-relaxed ${
                dark ? "text-white/65" : "text-muted"
              }`}
            >
              {description}
            </p>
            <Link
              href={href}
              className={`link-arrow mt-8 inline-flex text-[0.98rem] ${
                dark ? "text-white" : ""
              }`}
            >
              {linkText}
            </Link>
          </Reveal>
          <Reveal delay={80}>{children}</Reveal>
        </div>
      </div>
    </section>
  );
}
