import Image from "next/image";

/**
 * Prime Meridian Systems horizontal logo lockup.
 */
export default function Wordmark({ className = "", invert = false }) {
  return (
    <Image
      src="/logo-horizontal.png"
      alt="Prime Meridian Systems"
      width={2000}
      height={460}
      priority
      className={`w-auto object-contain object-left ${invert ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
