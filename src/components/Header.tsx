"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { kaushanScript } from "@/app/fonts";
import Image from "next/image";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBg);

      return () => {
        window.removeEventListener("scroll", changeBg);
      };
    }
  }, []);

  const changeBg = () => {
    if (window.scrollY >= 55) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };

  const paramsLength = Object.keys(useParams()).length;
  const router = useRouter();

  const start = (e: any) => {
    if (e == 0) {
      window.scrollTo(0, 0);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <header
        className={`px-4 py-6 md:p-8 text-white w-full transition-all duration-500 ${
          headerBg ? "fixed bg-neutral-900 z-10" : "absolute"
        }`}
      >
        <div className="flex items-center justify-between font-semibold mx-auto md:w-5/6">
          <div className="my-auto">
            <h1
              className={`${kaushanScript.className} text-4xl md:text-3xl lg:text-4xl cursor-pointer`}
              onClick={() => {
                start(paramsLength);
              }}
            >
              React<span className="text-violet-400"> Movies</span>
            </h1>
          </div>

          <div className="my-auto">
            <a href="https://www.themoviedb.org/" target="_blank">
              <Image
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="TMBD Logo"
                width={80}
                height={10}
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
