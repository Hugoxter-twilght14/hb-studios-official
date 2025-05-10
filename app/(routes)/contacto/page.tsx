
import { Navbar } from "@/components/Shared/Navbar"
import Footer from "../home/components/Footer/Footer"

export default function Page() {


  return (
    <>
      <Navbar />

      <div className="p-6 text-white mt-20">
        <h1 className="text-2xl font-bold">
          CONTACTO
        </h1>
      </div>

      <section className="w-full mt-[-80px]">
        <Footer/>
      </section>  
    </>
  )
}
