import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">hello word</div>
      <Link href="/about"> About Page </Link>
      <br />
      <Link href="/product"> Product Page </Link>
    </main>
  );
}
