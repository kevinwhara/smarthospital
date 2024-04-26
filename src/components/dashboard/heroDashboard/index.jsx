import Image from "next/image"
import heroImage from "@/image/dashboard/heroDashboard.svg"
import InputSearch from "./inputSearch"

const HeroDashboard = () => {
    return (
        <div className="">
            <Image src={heroImage}/>
            <div className="flex flex-col gap-4 absolute left-[50%] top-[105px]">
                <h1 className="px-14 text-color-primary font-bold text-[30px]">Cari Obat Apa?</h1>
                <div className="bg-color-background rounded-lg">
                    <InputSearch/>
                </div>
            </div>
        </div>
    )
}

export default HeroDashboard