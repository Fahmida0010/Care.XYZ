import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";

const Logo = () => {
  return (
      <Link
      href="/"
      className="flex items-center gap-0" 
    >
      {/* Logo Image */}
      <Image
        alt="logo-care"
        src={logo}
        width={90}    
        height={90}   
        className="object-contain"
      />

      {/* Text */}
      <h2 className="text-lg md:text-xl font-bold m-0
     text-pink-700">
        Care<span className="text-blue-700">.xyz</span>
      </h2>
    </Link>
  );
};

export default Logo;
