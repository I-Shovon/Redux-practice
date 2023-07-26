import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center items-center justify-between p-24">
      <h1>Abbas uddin gabgas</h1>
      <Link href="/about">About</Link>
      <Link class='my-5 block' href="/simpleproject">Redux</Link>

    </main>
  );
}
