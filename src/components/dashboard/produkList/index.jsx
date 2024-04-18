import Image from "next/image";
import logoWhite from "@/image/logoWhite.svg";
import Link from "next/link";
import discountCard from "@/image/discountCard.svg"
import fotoObat from "@/image/productImage/product1.svg"

const ProductList = ({ products }) => {

    const image_url = "@/image/productImage/product1.svg"

    return (
        <div className="shadow rounded-xl">
            <Link href={'/dashboard/'}>
                <div className="relative items-center justify-center rounded-t-xl">
                    <div className="flex flex-row gap-1 p-2 bg-color-accent rounded-tl-xl rounded-br-xl absolute items-center">
                        <Image src={logoWhite} className="size-3"/>
                        <h1 className="font-bold text-[10px] text-color-primary">MEDGuard</h1>
                    </div>
                    <Image src={image_url} width={300} height={300}/>
                    <div className="absolute top-[125px] text-color-primary">
                        <h1 className="absolute top-[43px] left-4 font-medium">disc <strong>20%</strong></h1>
                        <Image src={discountCard} className="size-28"/>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center absolute top-[164px] left-[178px] shadow rounded px-1.5 py-1">
                        <h1 className="">4.5</h1>
                        <span className="text-color-yellow">
                            &#9733;
                        </span>
                    </div>
                </div>
                <div className="bg-color-accent p-4 rounded-b-xl">
                    <div className="text-color-primary">
                        <h1 className="max-w-[224px] font-bold text-[17px]">Halowell D3 1000 IU 10 Tablet</h1>
                        <h2 className="font-normal text-[12px]">Per Strip</h2>
                        <h2 className="font-semibold text-[17px]">Rp 24.000</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductList;
