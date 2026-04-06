export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://silence-space.vercel.app/sitemap.xml",
  };
}