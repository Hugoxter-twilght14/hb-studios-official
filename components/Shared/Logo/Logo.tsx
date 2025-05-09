import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="font-extrabold text-2xl text-[#00FFFF]">
      <Image src="/iconos/logo.jpg" alt="HB Studios" title="HB Studios" width={35} height={35} className="rounded-full" />
      <p className="mt-[-35px] mx-[35px]">HB Stuidos</p>
    </Link>
  );
}
