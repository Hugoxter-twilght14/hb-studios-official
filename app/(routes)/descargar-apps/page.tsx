import { Navbar } from "@/components/Shared/Navbar"
import Footer from "../home/components/Footer/Footer"
import DescargarAppsClient from "./components/DescargarAppsClient/DescargarAppsClient"
 

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-10">
        <DescargarAppsClient/>
      </main>

      <section className="mt-12">
        <Footer />
      </section>
    </div>
  )
}
