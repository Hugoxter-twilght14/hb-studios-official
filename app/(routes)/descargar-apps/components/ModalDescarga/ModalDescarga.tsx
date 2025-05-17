"use client"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AppInfo } from "../../data/types"
import { FaAndroid, FaWindows } from "react-icons/fa"

interface Props {
  app: AppInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalDescarga = ({ app, isOpen, onClose }: Props) => {
  if (!app) return null

  // Función para forzar descarga
  const descargarArchivo = (url: string, nombreArchivo: string) => {
    const a = document.createElement('a')
    a.href = url
    a.download = nombreArchivo
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-sm sm:max-w-md bg-black text-white rounded-lg px-4 py-6 max-h-[90vh] overflow-y-auto"
      >
        {/* Encabezado */}
        <DialogHeader>
          <div className="text-center mb-4">
            <Image src={app.image} alt={app.title} width={70} height={70} className="mx-auto rounded" />
            <h2 className="text-lg font-bold mt-2">{app.title}</h2>
            <p className="text-xs">De: <b>{app.developer}</b></p>
            <p className="text-xs">Plataforma: {app.platform}</p>
          </div>
        </DialogHeader>

        {/* Descripción */}
        <div className="text-center text-sm mb-4 px-2">
          {app.description}
        </div>

        {/* Carrusel horizontal */}
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

        {/* Botón Android */}
        {app.platform.includes("Android") && app.apkUrl && (
          <Button
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white w-full text-sm py-2 flex items-center justify-center gap-2"
            onClick={() => descargarArchivo(app.apkUrl, `${app.title}.apk`)}
          >
            <FaAndroid />
            Descargar para Android
          </Button>
        )}

        {/* Botón Windows */}
        {app.platform.includes("Windows") && app.apkUrl2 && (
          <Button
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white w-full text-sm py-2 flex items-center justify-center gap-2"
            onClick={() => descargarArchivo(app.apkUrl2!, `${app.title}.exe`)}
          >
            <FaWindows />
              Descargar para Windows
          </Button>
        )}

      </DialogContent>
    </Dialog>
  )
}
