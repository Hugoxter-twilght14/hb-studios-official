"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  id: number;
  slug: string;
  image: string;
  title: string;
  date: string;
  category: string;
  description: string;
  tags: string[];
}

export default function BlogCard({
  slug,
  image,
  title,
  date,
  category,
  description,
  tags,
}: BlogCardProps) {
  const router = useRouter();

  return (
    <div className="bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between" style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}>
      <div className="w-full aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          layout="responsive"
          className="object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, i) => (
            <span key={i} className="bg-cyan-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-yellow-400 font-medium text-sm mb-2">
          {date} / {category}
        </p>

        <h3 className="text-lg font-bold mb-2 leading-tight">{title}</h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>

        <button
          onClick={() => router.push(`/blog/${slug}`)}
          className="text-yellow-400 hover:underline text-sm mt-auto"
        >
          Leer Más
        </button>
      </div>
    </div>
  );
}
