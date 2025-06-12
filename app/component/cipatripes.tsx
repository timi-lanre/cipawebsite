"use client"
import Image from "next/image";
export default function CIPAtripe(){
  return (<div>
    <Image
                  src="/images/cipatriples.png"
                  alt="CIPA Triple Logo"
                  className="w-full h-auto object-contain"
                  width={1200}
                  height={600} 
                />
  </div>);
}