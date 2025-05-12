"use client"
import { useState } from "react"
import { AppInfo } from "../../data/types"
import { AppCard } from "../AppCard"
import appsData from "../../data/apps.json"

interface Props {
  onDownload: (app: AppInfo) => void
}

export default function AppGrid({ onDownload }: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 4

  const totalPages = Math.ceil(appsData.length / perPage)
  const start = (currentPage - 1) * perPage
  const currentApps = appsData.slice(start, start + perPage)

  return (
    <>
      {/* Grid de apps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentApps.map((app) => (
          <AppCard key={app.id} app={app} onDownload={() => onDownload(app)} />
        ))}
      </div>

      {/* Paginación numérica */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10">
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
    </>
  )
}
