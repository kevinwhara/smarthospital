import Image from "next/image"
import profilePicture from "@/image/ProfilePicture/profilePicture.svg"

const CardTestimoni = ({ nama, isi }) => {
    return(
        <div className="flex flex-col bg-color-accent max-w-96 rounded-xl cursor-pointer">
            <div className="flex flex-row items-center bg-color-primary w-fit m-4 rounded-full">
                <div className="">
                    <Image src={profilePicture} className="size-11"/>
                </div>
                <h1 className="pr-3 text-[14px] text-color-accent">@{nama}</h1>
            </div>
            <div className="m-4 mt-0 text-color-primary">
                <h1>“{isi}”</h1>
            </div>
        </div>
    )
}

export default CardTestimoni