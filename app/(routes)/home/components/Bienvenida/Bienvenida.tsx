"use client"
import React from 'react'

export default function Bienvenida() {
  return (
    <section className="py-8 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-center mb-8 uppercase tracking-wide">
          BIENVENIDOS AL SITIO WEB DE HBSTUDIOS
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-justify">
          Entérate de los últimos lanzamientos, noticias, parches de nuestras apps.
          Conoce y descarga todas nuestras apps y juegos tanto para Android en Play Store como para PC y Web aquí.
          Contáctanos si quieres ser parte de las betas cerradas de nuestras apps y juegos.
        </p>
      </div>
    </section>
  )
}
