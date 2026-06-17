import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Proyecto SEO - Jesús Meraz</title>
        <meta
          name="description"
          content="Proyecto SEO en Next.js con meta tags, sitemap y optimización de imágenes"
        />

        <meta property="og:title" content="Proyecto SEO Next.js" />
        <meta
          property="og:description"
          content="Sitio optimizado con Next.js, Render y SEO profesional"
        />
        <meta
          property="og:image"
          content="https://mi-proyecto-seo.onrender.com/images/seo-image.webp"
        />
      </Head>

      <main style={{ padding: "20px" }}>
        <h1>Bienvenido a mi Proyecto SEO</h1>

        <p>
          Este proyecto demuestra optimización SEO con Next.js, meta tags,
          sitemap dinámico y despliegue en Render.
        </p>

        {/* IMAGEN */}
        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Imagen SEO del proyecto"
        />

        {/* BOTONES */}
        <div style={{ marginTop: "20px" }}>
          <Link href="/blog">
            <button style={{ marginRight: "10px" }}>Ir al Blog</button>
          </Link>

          <Link href="/contacto">
            <button>Contacto</button>
          </Link>
        </div>
      </main>
    </>
  );
}