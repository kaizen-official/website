import Pill from "./Pill";
import { whatsappDemoHref } from "@/lib/content";

export default function BookDemoPill({
  variant = "primary",
  className = "",
  onClick,
  ...rest
}) {
  return (
    <Pill
      href={whatsappDemoHref()}
      rel="noopener noreferrer"
      target="_blank"
      title="Book a demo on WhatsApp"
      variant={variant}
      className={className}
      onClick={onClick}
      {...rest}
    >
      Book a demo
    </Pill>
  );
}
