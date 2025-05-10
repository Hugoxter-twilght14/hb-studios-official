
import { Navbar } from "@/components/Shared/Navbar"
import Footer from "../home/components/Footer/Footer"

export default function Page() {


  return (
    <div className="w-full min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />

      <section className="w-full mt-[-80px]">
        <Footer/>
      </section>  
    </div>
  )
}
