"use client"
import React from "react"

type Miembro = {
  nombre: string
  rol: string
  imagen: string
}

const miembros: Miembro[] = [
  {
    nombre: "Hugo Borraz",
    rol: "Fundador, CEO & Developer Web/Android",
    imagen: "/equipo/fundador.jpg",
  },
  {
    nombre: "Daniel Elibar",
    rol: "Diseñador gráfico & Frontend Developer Web",
    imagen: "/equipo/uiux.jpg",
  },
  {
    nombre: "HBS Bot Assistant",
    rol: "Bot Assitant",
    imagen: "/equipo/uiux.jpg",
  },
]

export default function Equipo() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase">Nuestro Equipo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {miembros.map((m) => (
          <div
            key={m.nombre}
            className="bg-[#1f1f1f] rounded-xl shadow-lg p-6 text-center hover:scale-[1.02] transition" style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}
          >
            <img
              src={m.imagen}
              alt={m.nombre}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-cyan-400 mb-4"
            />
            <h3 className="text-xl font-semibold">{m.nombre}</h3>
            <p className="text-sm text-gray-400">{m.rol}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
