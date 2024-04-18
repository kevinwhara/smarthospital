import Image from "next/image"
import dietIMG from "@/image/artikel/dietIMG.png"
import logoWhite from "@/image/logoWhite.svg"
import profilePicture from "@/image/artikel/profilePicture.png"
import hearth from "@/image/artikel/Addictional/hearth.svg"
import setting from "@/image/artikel/Addictional/setting.svg"
import share from "@/image/artikel/Addictional/share.svg"

const CardArtikel = ({ image, title, paragraph, namaDokter, time }) => {
    return(
        <div className="bg-color-accent w-fit rounded-xl drop-shadow">
            <div>
                <div className="flex flex-row gap-1 p-2 bg-color-accent rounded-tl-xl rounded-br-xl absolute items-center">
                    <Image src={logoWhite} className="size-3"/>
                    <h1 className="font-bold text-[10px] text-color-primary">MEDGuard</h1>
                </div>
                <Image src={image} width={288} className="rounded-t-xl"/>
            </div>
            <div className="">
                <div className="flex flex-row gap-2 ml-4 mt-4 text-[8px]">
                    <h1 className="bg-color-primary text-color-secondary p-1 rounded-md">Article</h1>
                    <h1 className="bg-color-primary text-color-secondary p-1 rounded-md">Danger</h1>
                </div>
                <div className="flex flex-col gap-1 m-4 my-1 max-w-64 text-color-primary">
                    <h1 className="font-bold text-sm">{title}</h1>
                    <p className="font-light text-[10px]">{paragraph}</p>
                </div>
                <div className="flex flex-row gap-16 m-4 mt-0">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="rounded-full">
                            <Image src={profilePicture} className="size-5"/>
                        </div>
                        <div className="flex flex-row gap-1.5 text-[10px] text-color-primary">
                                <h1>DR. {namaDokter}</h1>
                                <h1 className="font-medium"> · {time}</h1>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Image src={hearth}/>
                        <Image src={setting}/>
                        <Image src={share}/>
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default CardArtikel
