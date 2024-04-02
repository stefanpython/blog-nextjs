import { posts } from "@/app/lib/placeholder-data";
import Link from "next/link";

export default function Posts() {
  return (
    <div className="container max-w-2xl m-auto px-4 py-10">
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div key={post.id} className="post py-4">
            <h3 className="text-2xl font-medium">{post.title}</h3>
            <p>{post.description}</p>
            <span className="flex text-gray-500">{post.date}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
