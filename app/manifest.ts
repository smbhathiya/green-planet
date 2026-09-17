import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Green Planet - Protect Nature Before It's Too Late",
    short_name: "Green Planet",
    description:
      "An environmental awareness platform dedicated to protecting nature, wildlife, forests, oceans, and inspiring eco-friendly lifestyles.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#16a34a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
