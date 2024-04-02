import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-6">
      <div className="container max-w-2xl m-auto px-4 py-12">
        <h1 className="text-2xl font-semibold">
          Hey, I'm a Senior Software Engineer at Company. I enjoy working with
          Next.js and crafting beautiful front-end experiences.
        </h1>

        <p className="py-6 text-lg">
          This portfolio is built with Next.js and a library called next-mdx. It
          allows you to write Markdown and focus on the content of your
          portfolio.
        </p>

        <p className="text-lg">Deploy your own in a few minutes.</p>
      </div>

      <div className="container max-w-4xl m-auto px-4 py-12">
        <Image src="/home.jpg" alt="office image" width={1000} height={900} />
      </div>
    </main>
  );
}
