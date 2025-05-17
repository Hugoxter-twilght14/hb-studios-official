// components/Home/UltimasNoticias.tsx
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function UltimasNoticias() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const posts = [
     {
      id: 1,
      slug: "PlayMovies-Lanzamiento-global",
      image: "/ultimos-lanzamientos/playmovies_icono.jpg",
      date: "17 Mayo 2025",
      category: "PlayMovies",
      tags: ["Global Launch"],
      title: "PlayMovies - Lanzamiento global",
      description:
        "HBStudios presenta el lanzamiento global de PlayMovies, una app de streaming de peliculas, series y animes totalmente gratuita.",
    },
    {
      id: 2,
      slug: "bird-dash-beta-cerrada",
      image: "/ultimos-lanzamientos/icono-birddash.png",
      date: "02 Mayo 2025",
      category: "Bird Dash",
      tags: ["Beta", "Actualización"],
      title: "Bird Dash inicia su beta cerrada, detalles y requisitos",
      description:
        "HBStudios presenta la beta cerrada para Bird Dash, conoce cómo puedes participar y ser parte de esta prueba.",
    },
    {
      id: 3,
      slug: "gotranslate-traductor-de-idiomas",
      image: "/ultimos-lanzamientos/go_translate_icono.jpg",
      date: "31 Julio 2024",
      category: "Go Translate",
      tags: ["Global Launch"],
      title: "Go Translate - Traductor de idiomas - Lanzamiento global",
      description:
        "HBStudios presenta el lanzamiento global de Go Translate - Traductor de idiomas...",
    },
    {
      id: 4,
      slug: "fp-wallpapers-nuevas-funciones",
      image: "/ultimos-lanzamientos/fp_wallpapers_icono.jpg",
      date: "15 Julio 2024",
      category: "FP Wallpapers",
      tags: ["Mejoras", "UI", "Beta"],
      title: "FP Wallpapers se actualiza con nuevas funciones",
      description:
        "La nueva actualización incluye categorías dinámicas, vista previa animada y opción de favoritos.",
    },
  ];

  return (
    <section className="w-full py-12 px-4 text-white">
      <h2 className="text-3xl font-extrabold text-center mb-8 uppercase tracking-wide">
        Últimas Noticias
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-justify">
        Enterate de las últimas noticias, lanzamientos, parches de nuestras apps y todo lo que sucede en HB Studios.
      </p>

      <div className="max-w-screen-xl mx-auto">
        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post.id} className="px-4 h-full flex items-stretch">
              <div
                className="bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg w-full flex flex-col justify-between"
                style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}
              >
              
              <div className="w-full aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="responsive"
                  width={400}
                  height={300}
                  className="rounded-t-2xl object-cover"
                  />
                  </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="bg-cyan-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-yellow-400 font-medium text-sm mb-2">
                    {post.date} / {post.category} – Inicia su Beta Cerrada
                  </p>

                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <button
                    onClick={() => router.push(`/blog/${post.slug}`)}
                    className="text-yellow-400 hover:underline text-sm mt-auto"
                  >
                    Leer Más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="text-center mt-8">
          <button
            onClick={() => router.push("/blog")}
            className="bg-white text-black hover:bg-[#00ffff] px-6 py-2 rounded-md text-sm font-semibold transition"
          >
            Ver Más Noticias
          </button>
        </div>
      </div>
    </section>
  );
}
