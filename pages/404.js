import React from "react";
import Navigation from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import Image404 from "@/public/assets/images/404.png";
import Image404bg from "@/public/assets/images/404-bg.png"
import GradientButton from "@/components/button/GradientButton";
import Link from "next/link";

const Page404 = () => {
    return (
        <div className="error-bg">
            <Topbar />
            <Navigation />
            <div className="bg-gradient-to-br from-lightPink via-anakiwa to-lightPink h-screen align-center flex">
                <div className="container mx-auto">
                    <div className="h-screen flex flex-col lg:flex-row items-center justify-center">
                        <div className="w-full flex flex-col items-center lg:items-start">
                            <Image src={Image404} alt={"404"} />
                            <p className="text-christalle font-mulish font-normal text-x55">
                                Oops... <br />
                                Page not found...
                            </p>
                            <div className="my-5">
                            <Link href={"/"} className="bg-gradient-to-r to-minsk from-lavender w-64 px-10 py-2 font-mulish font-black normal rounded text-white uppercase text-x18 lg:text-x16 mt-3 md:mt-0">Go To Home</Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <Image src={Image404bg} alt="Image404bg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404;