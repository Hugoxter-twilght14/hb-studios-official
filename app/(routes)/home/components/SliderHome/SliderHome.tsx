"use client"
import React from 'react'
import Image  from "next/image"

export default function SliderHome() {

  return (
    <section className="relative w-full h-96 bg-black flex items-center justify-center">
      <Image src="/iconos/logo.jpg"
        alt="Logo HB Studios"
        width={300} 
        height={100} />
    </section>
  );

}
