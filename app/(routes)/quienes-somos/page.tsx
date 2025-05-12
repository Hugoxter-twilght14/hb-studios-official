
import { Navbar } from "@/components/Shared/Navbar"
import Footer from "../home/components/Footer/Footer"
import Historia from "./components/Historia/Historia"
import Equipo from "./components/Equipo/Equipo"
import MisionVisionValores from "./components/MisionVisionValores/MisionVisionValores"

export default function Page() {


  return (
    <>
      <Navbar />

      <Historia/>
      <Equipo/>
      <MisionVisionValores/>

      <section className="w-full mt-[-80px]">
        <Footer/>
      </section>  
    </>
  )
}
