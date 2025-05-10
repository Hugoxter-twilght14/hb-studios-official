"use client";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";

export default function Testimoniales() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Jesus Aguilar",
      quote:
        "Me gusta, tiene muchas categorías y hay muchas imágenes, sigan así, la funcionalidad de elegir cómo quieres establecer la imagen está muy buena, gracias por tan grandiosa aplicación y lo mejor de todo, sin anuncios..!!",
      app: "FP Wallpapers",
      rating: 5,
    },
    {
      name: "Carlos M.",
      quote: "Una de las mejores apps que he usado. Muy intuitiva y útil.",
      app: "PlayMovies",
      rating: 4,
    },
     {
      name: "Andres",
      quote:
        "Me gusta, tiene muchas categorías y hay muchas imágenes, sigan así, la funcionalidad de elegir cómo quieres establecer la imagen está muy buena, gracias por tan grandiosa aplicación y lo mejor de todo, sin anuncios..!!",
      app: "FP Wallpapers",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-12 px-4 text-white">
      <h2 className="text-3xl font-extrabold text-center mb-8 uppercase tracking-wide">
        Calificación y opiniones de usuarios
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-justify">
        Gracias por tan valiosos comentarios, cada uno nos ayuda a mejorar nuestras apps para ofrecerles siempre una experiencia satisfactoria.
      </p>

      <div className="max-w-screen-xl mx-auto">
          <div className="h-full">
            <Slider {...settings}>
                {testimonials.map((item, index) => (
                  <div key={index} className="px-4 h-full flex items-stretch"> {/* ← 'items-stretch' clave */}
                <div
                  className="bg-gray-900 rounded-2xl p-6 shadow-lg text-left border border-cyan-500/30 hover:border-cyan-400/80 transition-all duration-300 w-full flex flex-col min-h-[260px]" // ← AÑADE 'min-h-[260px]'
                  style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}
                >

                    {/* Avatar tipo letra */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-xl font-bold">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-400 text-sm">
                          Calificación →{" "}
                          <span className="text-cyan-400">{item.app}</span>
                        </p>
                      </div>
                    </div>

                    {/* Estrellas */}
                    <div className="flex mb-3 text-yellow-400 text-xl">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                      ))}
                    </div>

                    {/* Comentario */}
                    <p className="text-sm leading-relaxed text-justify text-gray-300">
                      {item.quote}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
}
