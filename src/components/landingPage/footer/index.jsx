import Image from "next/image"
import logoWhite from "@/image/logoWhite.svg"

const Footer = () => {
    return(
        <div className="bg-color-accent">
            <div className="flex flex-row p-10 text-color-primary justify-between">
                <div className="text-primary">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src={logoWhite} className="size-12"/>
                        <h1 className="font-bold text-[36px]">MEDGuard</h1>
                    </div>
                    <div className="mt-2">
                        <h1 className="text-[13px]">“Modern healthcare, anytime, anywhere.”</h1>
                    </div>
                    <div className="text-[13px] mt-4">
                        <h1 className="font-medium">wibowokevin425@gmail.com</h1>
                        <h1 className="font-medium">atharimahendra@gmail.com</h1>
                    </div>
                </div>
                <div className="flex flex-row gap-11">
                    <div className="text-[14px]">
                        <h1 className="font-bold text-[18px]">Home</h1>
                        <h1>Mengapa harus<br/>kami</h1>
                        <h1>Testimoni</h1>
                        <h1>Artikel</h1>
                    </div>
                    <div className="text-[14px]">
                        <h1 className="font-bold text-[18px]">Artikel</h1>
                        <h1>Tips</h1>
                        <h1>Danger</h1>
                        <h1>Manfaat</h1>
                        <h1>Pengetahuan</h1>
                    </div>
                    <div className="text-[14px]">
                        <h1 className="font-bold text-[18px]">Aplikasi</h1>
                        <h1>Android</h1>
                        <h1>IOS</h1>
                    </div>
                    <div className="text-[14px]">
                        <h1 className="font-bold text-[18px]">Riwayat</h1>
                    </div>
                    <div className="text-[14px]">
                        <h1 className="font-bold text-[18px]">Search</h1>
                    </div>
                </div>
                <div className="flex flex-col font-bold text-[18px]">
                    <h1>Connect With Us</h1>
                    <div></div>
                </div>
            </div>
            <div className="flex flex-row gap-14 items-center font-[14px] p-3 justify-center text-color-primary bg-color-secondary bg-opacity-25">
                <div>
                    <h1>©Copyright 2024 By <strong>MEDGuard</strong></h1>
                </div>
                <div>
                    <h1>Syarat dan Ketentuan | Kebijakan Privasi</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer