"use client";
import { useState } from "react";
import blogData from "../../data/blogData.json";
import BlogCard from "../BlogCard/BlogCard";

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const totalPages = Math.ceil(blogData.length / perPage);
  const start = (currentPage - 1) * perPage;
  const currentPosts = blogData.slice(start, start + perPage);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <BlogCard
            id={post.id}
            slug={post.slug}
            title={post.title}
            image={post.image}
            date={post.date}
            category={post.category}
            tags={post.tags}
            description={post.description ?? post.content.substring(0, 120)}
            />
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1
                ? "bg-cyan-400 text-black font-bold"
                : "bg-white text-black hover:bg-cyan-200"
            } transition`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
