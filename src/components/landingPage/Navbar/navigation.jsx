import Image from "next/image"
import Link from "next/link"
import medLogo from "@/image/logo-only.svg"

const Navigation = () => {
    return (
        <div className="py-[34px] px-[74px] h-auto flex flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-8">
                <div className="flex flex-row gap-4 cursor-pointer text-color-accent text-[42px] font-bold"><Image src={medLogo} width={42}/><h3>MEDGuard</h3> </div>
                
                <div className="flex flex-row gap-5">
                    <Link href={'/'} className="py-2 px-4 rounded-xl border bg-color-accent bg-opacity-20 font-bold text-color-accent hover:bg-color-accent hover:text-color-primary transition-all">Home</Link>
                    <Link href={'/'} className="py-2 px-4 rounded-xl border bg-color-white font-bold text-color-grey hover:bg-color-accent hover:text-color-primary transition-all">Artikel</Link>
                    <Link href={'/'} className="py-2 px-4 rounded-xl border bg-color-white font-bold text-color-grey hover:bg-color-accent hover:text-color-primary transition-all">Aplikasi</Link>
                    <Link href={'/'} className="py-2 px-4 rounded-xl border bg-color-white font-bold text-color-grey hover:bg-color-accent hover:text-color-primary transition-all">Riwayat</Link>
                    <Link href={'/'} className="py-2 px-4 rounded-xl border  bg-color-white font-bold text-color-grey hover:bg-color-accent hover:text-color-primary transition-all">Search</Link>
                </div>
            </div>
            <div className="">
                <Link href={'/login'} className="py-2 px-4 rounded-xl bg-color-accent font-bold text-color-primary">Login</Link>
            </div>
        </div>
    )
}

export default Navigation