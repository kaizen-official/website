/**
 * The Prime Meridian signature: soft iridescent concentric rings.
 * Pastel cyan → mint → lime arcs that double as radiating meridians.
 * Pure CSS (conic colour + repeating-radial mask + blur). Decorative.
 *
 * Render inside a positioned, sized wrapper - Aurora fills it.
 */
export default function Aurora({ className = "", animate = true }) {
  return (
    <div
      aria-hidden="true"
      className={`aurora absolute inset-0 ${animate ? "aurora-spin" : ""} ${className}`}
    />
  );
}
