
import { Navbar } from "@/components/Shared/Navbar"
import Footer from "../home/components/Footer/Footer"
import BlogGrid from "./components/BlogGrid/BlogGrid"

export default function Page() {


  return (
    <>
      <Navbar />

       <section className="max-w-screen-xl mx-auto px-4 py-12 text-white mt-10">
        <h1 className="text-3xl font-extrabold text-center mb-12 uppercase tracking-wide">
          Blog de Noticias
        </h1>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-justify mt-[-30px]">
        Enterate de las últimas noticias, lanzamientos, parches de nuestras apps y todo lo que sucede en HB Studios.
      </p>

        <BlogGrid/>
      </section>

      <section className="w-full mt-[-80px]">
        <Footer/>
      </section>  
    </>
  )
}
