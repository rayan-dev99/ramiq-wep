import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RAMIQ — جسر المعرفة والفرص",
    short_name: "RAMIQ",
    description: "سوق تعليمي مبتكر يربط الطلاب بمعلمين موثوقين لحصص حضورية متميزة.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0E766D",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
