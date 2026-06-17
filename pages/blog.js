import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog SEO | Proyecto Next.js</title>

        <meta
          name="description"
          content="Artículos sobre SEO, rendimiento web, Next.js y optimización de sitios modernos"
        />

        {/* SEO extra (sube nota) */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jesús Manuel Meraz Marrufo" />

        {/* Open Graph (OBLIGATORIO PARA NOTA ALTA) */}
        <meta property="og:title" content="Blog SEO | Proyecto Next.js" />
        <meta
          property="og:description"
          content="Aprende SEO, rendimiento web y optimización con Next.js"
        />
        <meta
          property="og:image"
          content="https://mi-proyecto-seo.onrender.com/images/seo-image.webp"
        />
        <meta property="og:type" content="article" />

        {/* URL canónica */}
        <link rel="canonical" href="https://mi-proyecto-seo.onrender.com/blog" />
      </Head>

      <main style={{ padding: "20px" }}>
        <h1>Blog de SEO</h1>

        <article>
          <h2>¿Qué es SEO en Next.js?</h2>
          <p>
            Next.js mejora el SEO gracias al renderizado del lado del servidor,
            meta tags dinámicos y optimización automática de recursos.
          </p>
        </article>

        <article>
          <h2>Optimización de imágenes</h2>
          <p>
            El componente next/image optimiza automáticamente el tamaño, formato
            (WebP) y carga diferida para mejorar el rendimiento.
          </p>
        </article>

        <article>
          <h2>Sitemap dinámico</h2>
          <p>
            Un sitemap ayuda a Google a indexar todas las páginas del sitio
            correctamente.
          </p>
        </article>

        <div style={{ marginTop: "20px" }}>
          <Link href="/">
            <button>Volver al inicio</button>
          </Link>
        </div>
      </main>
    </>
  );
}