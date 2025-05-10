// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import blogData from "../data/blogData.json";
import Image from "next/image";

export async function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <section className="w-full px-4 py-12 max-w-4xl mx-auto text-white">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-400 text-sm">
          {post.date} / <span className="text-cyan-400">{post.category}</span>
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag, i) => (
            <span key={i} className="bg-cyan-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full aspect-[4/3] mb-6">
        <Image
          src={post.image}
          alt={post.title}
          layout="responsive"
          width={800}
          height={600}
          className="rounded-xl object-cover"
        />
      </div>

      <article className="text-gray-200 leading-relaxed text-base">
        {post.content}
      </article>
    </section>
  );
}
