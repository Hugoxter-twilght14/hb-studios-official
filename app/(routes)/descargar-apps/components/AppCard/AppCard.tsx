import { AppInfo } from "../../data/types"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Props {
  app: AppInfo;
  onDownload: () => void;
}

export const AppCard = ({ app, onDownload }: Props) => (
  <div
    className="bg-[#1f1f1f] text-white rounded-xl overflow-hidden shadow-lg p-4 w-full max-w-sm mx-auto 
               hover:scale-[1.02] hover:shadow-cyan-500/20 transition-all duration-300 ease-in-out"
    style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}
  >
    {/* Imagen responsive sin fondo negro */}
    <div className="w-full rounded-md overflow-hidden">
      <Image
        src={app.image}
        alt={app.title}
        width={500}
        height={300}
        className="object-contain w-full h-auto"
      />
    </div>

    <h3 className="text-lg font-semibold mt-4">{app.title}</h3>
    <p className="text-sm text-gray-300 line-clamp-2">{app.description}</p>

    <Button
      className="mt-4 w-full bg-[#00FFFF] text-black hover:bg-cyan-600"
      onClick={onDownload}
    >
      Descargar
    </Button>
  </div>
)
