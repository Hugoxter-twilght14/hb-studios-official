"use client"
import { useState } from "react"
import { AppInfo } from "../../data/types"
import { AppCard } from "../AppCard"
import appsData from "../../data/apps.json"
import { ModalDescarga } from "../ModalDescarga"

export default function DescargarAppsClient() {
  const [selectedApp, setSelectedApp] = useState<AppInfo | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 4
  const totalPages = Math.ceil(appsData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedApps = appsData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12 text-white mt-10">
      <h1 className="text-3xl font-extrabold text-center mb-12 uppercase tracking-wide">
        Zona de descargas
      </h1>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-justify mt-[-30px]">
        Aquí encontrarás todas nuestras apps tanto de Android como para PC y web disponibles para descargar.
      </p>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedApps.map((app) => (
          <AppCard key={app.id} app={app} onDownload={() => setSelectedApp(app)} />
        ))}
      </div>

      {/* Paginación numérica */}
      {totalPages > 1 && (
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
      )}

      {/* Modal */}
      <ModalDescarga app={selectedApp} isOpen={!!selectedApp} onClose={() => setSelectedApp(null)} />
    </section>
  )
}
