import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/navbar/logo.svg";
import Link from "next/link";
import { Hamburguer } from "./svg/Hamburguer";
import { CloseMenu } from "./svg/CloseMenu";
import SocialIconLanguage from "./SocialIconLanguage";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className={`${isOpen && 'sticky'} top-0 z-10 lg:static`}>
        <div className="relative bg-white lg:bg-gradient-to-r from-lightPink to-anakiwa">
          <div className="container mx-auto">
            <div className="navbar">
              <div className="navbar-start">
                <Link href={""}>
                  <Image className="logo-img" src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <Link
                      href={"/"}
                      className="font-mulish normal font-normal text-x16 text-martinique"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/faq"}
                      className="font-mulish normal font-normal text-x16 text-martinique"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/blog"}
                      className="font-mulish normal font-normal text-x16 text-martinique"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="font-mulish normal font-normal text-x16 text-martinique"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact"}
                      className="font-mulish normal font-normal text-x16 text-martinique"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>


              <div className="navbar-end relative">
                <div className="hidden lg:block">
                  <Link
                    href={"/"}
                    className="bg-transparent underline underline-offset-1 text-minsk font-mulish font-bold uppercase text-x14 mr-8 normal"
                  >
                    Log in
                  </Link>
                  <Link
                    href={"/"}
                    className="bg-gradient-to-r from-lavender to-minsk rounded py-3 px-10 font-mulish normal font-black text-white text-x14 uppercase"
                  >
                    Sign up
                  </Link>
                </div>


                <div className="block lg:hidden">
                  {isOpen ? (
                    <button
                      className="btn btn-ghost"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      <CloseMenu />
                    </button>
                  ) : (
                    <button
                      className="btn btn-ghost"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      <Hamburguer />
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet and mobile Section */}
      <div className="block lg:hidden">
        {isOpen ? (
          <div className="bg-white fixed w-[100vw] h-[100vh] z-10 top-16 left-0">
            <ul className="bg-gradient-to-r from-lightPink to-anakiwa h-[100vh]">
              <div className="md:flex justify-between md:pt-7 md:pr-7">
                <div>
                  <li className="py-4 pl-6">
                    <Link
                      href={"/"}
                      className="font-mulish normal font-normal text-x18 text-martinique"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="py-4 pl-6">
                    <Link
                      href={"/faq"}
                      className="font-mulish normal font-normal text-x18 text-martinique"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="py-4 pl-6">
                    <Link
                      href={"/blog"}
                      className="font-mulish normal font-normal text-x18 text-martinique"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="py-4 pl-6">
                    <Link
                      href={"#"}
                      className="font-mulish normal font-normal text-x18 text-martinique"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="py-4 pl-6">
                    <Link
                      href={"/contact"}
                      className="font-mulish normal font-normal text-x18 text-martinique"
                    >
                      Contact
                    </Link>
                  </li>
                </div>
                <div className="md:flex">
                  <li className="py-4 text-center">
                    <Link
                      href={"#"}
                      className="bg-transparent underline underline-offset-1 text-minsk font-mulish font-bold uppercase text-xs mr-8 font-normal normal"
                    >
                      Log in
                    </Link>
                  </li>
                  <li className="py-4 pb-8 text-center">
                    <Link
                      href={"#"}
                      className="bg-gradient-to-r from-lavender to-minsk rounded py-3 px-10 font-mulish font-normal normal font-black text-white uppercase"
                    >
                      Sign up
                    </Link>
                  </li>
                </div>
              </div>
              <li className="py-4 px-6">
                <SocialIconLanguage className={"dropdown-top"} />
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Navigation;
