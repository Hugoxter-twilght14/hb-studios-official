"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube
} from "react-icons/fa"
import axios from "axios"

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post("/api/enviar-correo", form)
      alert("Mensaje enviado correctamente.")
      setForm({ nombre: "", correo: "", mensaje: "" })
    } catch (err) {
      alert("Error al enviar el mensaje.")
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-white grid md:grid-cols-2 gap-10 mt-10">
      {/* Información de contacto */}
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold uppercase">Contáctanos</h2>
        <p className="text-gray-400">
          ¿Quieres colaborar con nosotros o probar las betas de nuestros futuros lanzamientos? Llena el formulario o contáctanos en nuestras redes.
        </p>

        <div className="space-y-3 text-sm text-gray-300">
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-cyan-400" /> Dirección: CP. 30700 – Tapachula, Chis.
          </p>
          <p className="flex items-center gap-3">
            <FaPhone className="text-cyan-400" /> Teléfono: No disponible por el momento
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-cyan-400" /> Email: <a href="mailto:hbstudiosoficial14@gmail.com" className="underline">hbstudiosoficial14@gmail.com</a>
          </p>
        </div>

        <div className="flex gap-6 text-2xl mt-4 ">
          <FaFacebook className="text-blue-700 hover:text-white cursor-pointer" />
          <FaInstagram className="text-pink-700 hover:text-white cursor-pointer" />
          <FaYoutube className="text-red-700 hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Formulario con borde animado */}
      <div className="relative">
        {/* Capa animada giratoria */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 animate-spin-slower blur-sm z-0" />

        {/* Contenido del form */}
        <div className="relative z-10 bg-[#1f1f1f] rounded-xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold mb-2">Enviar Mensaje</h3>
            <Input
              placeholder="Nombre completo"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              placeholder="Correo electrónico"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              required
            />
            <Textarea
              placeholder="Escribe tu mensaje aquí..."
              name="mensaje"
              rows={4}
              value={form.mensaje}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
