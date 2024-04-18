import React from "react";
import Image from "next/image";
import heroImage from "@/image/IlustrasiATHero.svg"
import Solusi from "./solusiKesehatan";

const Hero = () => {
    return (
        <div className="flex bg-color-background w-full">
            <div className="pl-32 pr-56">
                <Solusi/>
            </div>
            <div className="pt-20">
                <Image src={heroImage} width={500} height={500} className="pt-20"/>
            </div>
        </div>
    )
}

export default Hero