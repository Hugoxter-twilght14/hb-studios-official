"use client"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AppInfo } from "../../data/types"
import { useState } from "react"

interface Props {
  app: AppInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalDescarga = ({ app, isOpen, onClose }: Props) => {
  if (!app) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-sm sm:max-w-md bg-black text-white rounded-lg px-4 py-6 max-h-[90vh] overflow-y-auto"
      >
        {/* Encabezado: Logo, título, info */}
        <DialogHeader>
          <div className="text-center mb-4">
            <Image src={app.image} alt={app.title} width={70} height={70} className="mx-auto rounded" />
            <h2 className="text-lg font-bold mt-2">{app.title}</h2>
            <p className="text-xs">De: <b>{app.developer}</b></p>
            <p className="text-xs">Plataforma: {app.platform}</p>
          </div>
        </DialogHeader>

        {/* Contenido principal */}
        <div className="text-center text-sm mb-4 px-2">
          {app.description}
        </div>

        {/* Carrusel independiente con scroll horizontal */}
        <div className="w-full overflow-x-auto scrollbar-hide">
  <div className="flex gap-2 w-max px-2 pb-3">
    {app.screenshots.map((src, i) => (
      <div
        key={i}
        className="w-20 sm:w-24 flex-shrink-0 aspect-[9/16] relative"
      >
        <Image
          src={src}
          alt={`screenshot-${i}`}
          fill
          className="rounded-md object-cover"
        />
      </div>
    ))}
  </div>
</div>


        {/* Botón de descarga */}
        <Button
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white w-full text-sm py-2"
          onClick={() => window.open(app.apkUrl, "_blank")}
        >
          Descargar
        </Button>
      </DialogContent>
    </Dialog>
  )
}
