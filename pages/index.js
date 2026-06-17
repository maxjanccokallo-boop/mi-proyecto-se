import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio SEO</title>
        <meta name="description" content="Página optimizada SEO en Next.js" />

        <meta property="og:title" content="Inicio | Mi Sitio SEO" />
        <meta property="og:description" content="Aprende SEO con Next.js" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Home</h1>
    </>
  );
}