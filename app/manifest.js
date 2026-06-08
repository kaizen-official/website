export default function manifest() {
  return {
    name: "Prime Meridian Systems",
    short_name: "PMS",
    description:
      "AI-native systems and intelligence platforms that help Bharat's businesses operate and grow more intelligently.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f5f1",
    theme_color: "#100f0c",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "2000x2000",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
