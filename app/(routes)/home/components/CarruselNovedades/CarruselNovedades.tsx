// components/Home/CarruselNovedades.tsx
"use client"; // Asegúrate de que este componente se ejecute solo en el cliente
import { Button } from '@/components/ui/button';
import Slider from 'react-slick';
import { useRouter } from 'next/navigation'; // Cambia de 'next/router' a 'next/navigation'
import React, { useEffect, useState } from 'react';

const CarruselNovedades = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter(); // Este es el router adecuado en la estructura de app/

  useEffect(() => {
    setIsMounted(true); // Se asegura de que el componente se haya montado
  }, []);

  if (!isMounted) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="py-8">
      <h2 className="text-3xl font-extrabold text-center mb-8 uppercase tracking-wide">Últimos Lanzamientos</h2>

      <Slider {...settings}>
        <div className="w-full flex justify-center items-center">
          <img src="/ultimos-lanzamientos/playmovies_icono.jpg" alt="PlayMovies"  className="object-contain rounded-lg shadow-md mx-auto" style={{ width: '412px', height: '412px', boxShadow: "0 0 10px rgba(0,255,255,0.2)" }} />
        </div>
        <div className="w-full flex justify-center items-center">
          <img src="/ultimos-lanzamientos/icono-birddash.png" alt="Bird Dash"  className="object-contain rounded-lg shadow-md mx-auto" style={{ width: '412px', height: '412px', boxShadow: "0 0 10px rgba(0,255,255,0.2)" }} />
        </div>
        <div className="w-full flex justify-center items-center">
          <img src="/ultimos-lanzamientos/fp_wallpapers_icono.jpg" alt="Go Translate: Traductor de idiomas"  className="object-contain rounded-lg shadow-md mx-auto" style={{ width: '412px', height: '412px', boxShadow: "0 0 10px rgba(0,255,255,0.2)" }} />
        </div>
        <div className="w-full flex justify-center items-center">
          <img src="/ultimos-lanzamientos/go_translate_icono.jpg" alt="FP Wallpapers"  className="object-contain rounded-lg shadow-md mx-auto" style={{ width: '412px', height: '412px', boxShadow: "0 0 10px rgba(0,255,255,0.2)" }} />
        </div>
      </Slider>

      <div className="text-center mt-4">
        <Button 
          className="bg-white text-black hover:bg-[#00ffff] mt-7" 
          onClick={() => router.push('/descargar-apps')}
        >
          Ver Más
        </Button>
      </div>
    </section>
  );
};

export default CarruselNovedades;
