import { Link } from "@/i18n/routing";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex-1 flex justify-start">
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/images/logo3.PNG"
          alt="logo"
          width={100}
          height={100}
          className="w-12 h-12 hover:scale-105 transition-transform duration-300"
        />
        <div className="flex items-center cursor-pointer">
          <h1
            className="text-2xl tracking-wider leading-none font-bold"
            style={{
              fontFamily: '"Courier New", Courier, monospace',
              fontWeight: "900",
              transform: "perspective(500px) rotateX(15deg)",
              textShadow: "0 4px 8px rgba(0,0,0,0.3)",
              letterSpacing: "0.1em",
            }}
          >
            <span className="text-red-500 hover:text-red-600 transition-all duration-300 inline-block hover:scale-110">
              R
            </span>
            <span className="text-red-500 hover:text-red-600 transition-all duration-300 inline-block hover:scale-110">
              O
            </span>
            <span className="text-yellow-500 hover:text-yellow-600 transition-all duration-300 inline-block hover:scale-110">
              T
            </span>
            <span className="text-yellow-500 hover:text-yellow-600 transition-all duration-300 inline-block hover:scale-110">
              A
            </span>
            <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 inline-block hover:scale-110">
              L
            </span>
            <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 inline-block hover:scale-110">
              Y
            </span>
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
