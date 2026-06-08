import Reveal from "./Reveal";

export default function SectionIntro({
  label,
  title,
  description,
  align = "left",
  className = "",
  titleId,
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={`mb-12 md:mb-16 ${centered ? "mx-auto max-w-3xl text-center" : ""} ${className}`}
    >
      {label ? <p className="mono-label mb-4">{label}</p> : null}
      <h2
        id={titleId}
        className="display text-balance text-4xl md:text-5xl lg:text-[3.4rem]"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-lg leading-relaxed text-muted ${centered ? "text-balance" : "max-w-2xl"}`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
