import { Navbar } from "@/components/Shared/Navbar"
import SliderHome from "./(routes)/home/components/SliderHome/SliderHome"
import Bienvenida from "./(routes)/home/components/Bienvenida/Bienvenida"
import CarruselNovedades from "./(routes)/home/components/CarruselNovedades/CarruselNovedades"
import Testimoniales from "./(routes)/home/components/Testimoniales/Testimoniales"
import Footer from "./(routes)/home/components/Footer/Footer"
import UltimasNoticias from "./(routes)/home/components/UltimasNoticias/UltimasNoticias"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />

      {/* Secciones espaciadas y adaptativas */}
      <section className="w-full">
        <SliderHome />
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 py-8">
        <Bienvenida />
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 py-8 mt-[-100px]">
        <CarruselNovedades />
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 py-8 mt-[-80px]">
        <Testimoniales/>
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 py-8 mt-[-80px]">
        <UltimasNoticias/>
      </section>

      <section className="w-full mt-[-80px]">
        <Footer/>
      </section>  
    </div>
  )
}
