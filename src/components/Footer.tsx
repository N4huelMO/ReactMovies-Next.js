"use client";
import { kaushanScript } from "@/app/fonts";
import { IconContext } from "react-icons";

import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const icon =
  "cursor-pointer hover:text-violet-600 hover:scale-125 transition-all";

const Footer = () => {
  return (
    <footer className="md:p-8 p-3 text-white w-full bg-neutral-900">
      <div className="flex justify-center sm:justify-between mx-auto md:w-5/6">
        <div className="text-3xl font-semibold my-auto">
          <p
            className={`${kaushanScript.className} font-kaushan text-4xl hidden sm:block`}
          >
            React<span className="text-violet-400"> Movies</span>
          </p>
        </div>
        <div className="my-auto">
          <nav className="flex lg:gap-8 gap-4 text-violet-400">
            <IconContext.Provider
              value={{
                className: icon,
              }}
            >
              <BsFacebook size={25} />

              <BsTwitter size={25} />

              <BsInstagram size={25} />
            </IconContext.Provider>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
