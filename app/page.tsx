import Link from "next/link";

export default function Home() {
  return (
    <main className="py-6">
      <div className="container max-w-2xl m-auto px-4">
        <nav className="flex space-x-4 text-xl">
          <Link href="/about">About</Link>
          <Link href="posts">Posts</Link>
        </nav>
      </div>
    </main>
  );
}
