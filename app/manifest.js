export default function manifest() {
  return {
    name: "Prime Meridian Systems",
    short_name: "PMS",
    description:
      "Operational software for Bharat's MSMEs - the operational coordination layer across inventory, dispatch, procurement, workflows and finance.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f5f1",
    theme_color: "#100f0c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
