
import { Navbar } from "@/components/Shared/Navbar"
import Footer from "../home/components/Footer/Footer"
import Contacto from "./components/Contacto/Contacto"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        <Contacto />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
