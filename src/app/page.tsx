import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Page() {
  return(
    <div>
   
      <h1>Home Page</h1>
      <Image src="/images/nextjs.png" width={200} height={200} />
    </div>
  )
}
