import Link from "next/link";
import React from "react";
import { LeftArrow } from "./svg/LeftArrow";

const GradientTitle = (props) => {
  return (
    <div className="bg-gradient-to-r from-anakiwa via-pink to-anakiwa">
      <div className="container mx-auto">
        <div className="">
          <p className="font-mulish normal pt-10 font-semibold text-x18 text-white flex items-center">
            <LeftArrow />
            <Link href={"/"} className="ml-3">
              Back
            </Link>
          </p>
          <p className="text-center font-mulish normal py-5 md:py-20 font-black text-x36  md:text-x55 lg:text-x64  uppercase text-white">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GradientTitle;
