"use client";
import { FaFacebookF, FaGooglePlay, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Redes sociales */}
        <div className="flex space-x-6 text-xl">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-blue-700 hover:text-white transition">
            <FaFacebookF />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-pink-600 hover:text-white transition">
            <FaInstagram />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Google Play" className="text-yellow-600 hover:text-white transition">
            <FaGooglePlay />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-green-600 hover:text-white transition">
            <FaWhatsapp />
          </Link>
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube" className="text-red-700 hover:text-white transition">
            <FaYoutube />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          &copy; 2023–{new Date().getFullYear()} <span className="font-semibold text-white">HB Studios</span> | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
