export default function handler(req, res) {
  const baseUrl = "https://mi-proyecto-seo.onrender.com";

  const pages = [
    { path: "/", name: "Inicio" },
    { path: "/blog", name: "Blog" },
    { path: "/contacto", name: "Contacto" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `
  <url>
    <loc>${baseUrl}${p.path}</loc>
    <changefreq>weekly</changefreq>
  </url>
`
  )
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}