import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Proyecto SEO</title>
        <meta name="description" content="Formulario de contacto del proyecto" />
      </Head>

      <main style={{ padding: "20px" }}>
        <h1>Contacto</h1>

        <p>Email: ejemplo@proyecto.com</p>
        <p>Teléfono: +51 999 999 999</p>

        {/* FORMULARIO SIMPLE */}
        <form>
          <input placeholder="Nombre" />
          <br />
          <input placeholder="Correo" />
          <br />
          <textarea placeholder="Mensaje" />
          <br />
          <button type="submit">Enviar</button>
        </form>

        <Link href="/">
          <button style={{ marginTop: "20px" }}>Volver</button>
        </Link>
      </main>
    </>
  );
}