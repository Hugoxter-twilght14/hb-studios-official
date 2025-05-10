"use client"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Logo } from "@/components/Shared/Logo"
import {Menu } from "lucide-react"
import { itemsNavbar } from "@/data/itemsNavbar"
import Link from "next/link"
import { useScrollPosition } from "@/hooks/UseScrollPosition"
import { cn } from "@/lib/utils"



export default function NavbarMobile() {
   const scrollPosition = useScrollPosition()
  return (
    <div className={cn(
          "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300",
          scrollPosition > 20 ? 'bg-black' : 'bg-transparent'
        )}> 
    <div className="p-4 flex justify-between">
      <Logo />

      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="bg-black">
          <div className="flex flex-col gap-4">
            {itemsNavbar.map((item) => (
              <Link key={item.name} href={item.link} className="hover:text-[#00FFFF] transition-all duration-300">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="border-[1px] border-white/70 my-5" />
          <div className="flex justify-between gap-6 mt-4">
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
  )
}
