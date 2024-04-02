import { posts } from "@/app/lib/placeholder-data";

export default function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id); // Convert id to number

  // Filter the post with the matching id
  const filteredPost = posts.find((post) => post.id === id);

  console.log(posts);

  if (!filteredPost) {
    // Handle case when post with given id is not found
    return (
      <div className="container max-w-2xl m-auto px-4 py-10">
        <p>Post not found</p>
      </div>
    );
  }

  // Render the found post
  return (
    <div className="container max-w-2xl m-auto px-4 py-10">
      <h2 className="text-4xl py-3">{filteredPost.title}</h2>
      <p className="text-xl pb-3">{filteredPost.description}</p>
      <span className="text-gray-500">{filteredPost.date}</span>
      <p className="py-2 text-lg">{filteredPost.content}</p>
    </div>
  );
}
