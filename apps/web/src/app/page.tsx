import Image from 'next/image';

export default function Home() {
  const mensaje = 'Hola Mundo';
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{mensaje}</h1>
    </main>
  );
}
