export default function handler(req, res) {
  const baseUrl = "https://mi-proyecto-seo.onrender.com";

  // 1. Páginas estáticas principales (las que ya tenías)
  const pages = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/blog", priority: "0.8", changefreq: "weekly" },
    { path: "/contacto", priority: "0.7", changefreq: "monthly" },
  ];

  // 2. LO QUE FALTABA: Datos dinámicos simulando una Base de Datos o CMS
  const postsDesdeCMS = [
    { slug: "que-es-seo-en-nextjs", priority: "0.6", changefreq: "weekly" },
    { slug: "optimizacion-de-imagenes", priority: "0.6", changefreq: "weekly" },
    { slug: "sitemap-dinamico", priority: "0.6", changefreq: "weekly" }
  ];

  // 3. Mapeamos las páginas estáticas a formato XML string
  const staticPagesXml = pages
    .map(
      (p) => `  <url>
    <loc>${baseUrl}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("\n");

  // 4. Mapeamos los artículos del CMS a formato XML string (anteponiendo /blog/)
  const dynamicPagesXml = postsDesdeCMS
    .map(
      (post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <changefreq>${post.changefreq}</changefreq>
    <priority>${post.priority}</priority>
  </url>`
    )
    .join("\n");

  // 5. Unimos ambas partes dentro del esqueleto del sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPagesXml}
${dynamicPagesXml}
</urlset>`;

  // 6. Enviamos la respuesta como XML
  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}