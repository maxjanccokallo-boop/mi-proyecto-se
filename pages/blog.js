import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog SEO | Proyecto Next.js</title>
        <meta
          name="description"
          content="Artículos sobre SEO, rendimiento web y Next.js"
        />
      </Head>

      <main style={{ padding: "20px" }}>
        <h1>Blog de SEO</h1>

        <article>
          <h2>¿Qué es SEO en Next.js?</h2>
          <p>
            SEO en Next.js permite mejorar la visibilidad en Google usando meta
            tags y renderizado optimizado.
          </p>
        </article>

        <article>
          <h2>Optimización de imágenes</h2>
          <p>
            Usando next/image se mejora el rendimiento automáticamente.
          </p>
        </article>

        <Link href="/">
          <button>Volver al inicio</button>
        </Link>
      </main>
    </>
  );
}