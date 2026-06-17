import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | SEO Next.js</title>
        <meta name="description" content="Artículos SEO y Next.js" />

        <meta property="og:title" content="Blog | SEO Next.js" />
        <meta property="og:description" content="Contenido educativo SEO" />
        <meta property="og:type" content="article" />
      </Head>

      <h1>Blog</h1>
    </>
  );
}