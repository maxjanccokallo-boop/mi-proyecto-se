import dynamic from "next/dynamic";

const LargeComponent = dynamic(
  () => import("../components/LargeComponent"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a mi página optimizada</h1>
      <LargeComponent />
    </div>
  );
}