import Image from "next/image";
import logoWhite from "@/image/logoWhite.svg";
import Link from "next/link";
import discountCard from "@/image/discountCard.svg"

const ProductList = ({ product }) => {

    return (
        <div className="grid grid-cols-4 gap-4 ml-14">
            {product?.map((produk) => (
                <div className="shadow rounded-xl max-w-[250px]">
                    <Link href={`/product/${produk.id}`} key={produk.id}>
                        <div className="relative items-center justify-center rounded-t-xl">
                            <div className="flex flex-row gap-1 p-2 bg-color-accent rounded-tl-xl rounded-br-xl absolute items-center">
                                <Image src={logoWhite} className="size-3"/>
                                <h1 className="font-bold text-[10px] text-color-primary">MEDGuard</h1>
                            </div>
                            <img src={produk.imageURL}/>
                            <div className="absolute top-[125px] text-color-primary">
                                <h1 className="absolute top-[43px] left-4 font-medium">disc <strong>{produk.discount}%</strong></h1>
                                <Image src={discountCard} className="size-28"/>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-center absolute top-[164px] left-[178px] shadow rounded px-1.5 py-1">
                                <h1 className="text-color-stone-300">{produk.rating}</h1>
                                <span className="text-color-yellow">
                                    &#9733;
                                </span>
                            </div>
                        </div>
                        <div className="bg-color-accent p-4 rounded-b-xl hover:bg-color-secondary transition-all">
                            <div className="text-color-primary">
                                <h1 className=" font-bold text-[17px]">{produk.name}</h1>
                                <h2 className="font-normal text-[12px]">Per {produk.per}</h2>
                                <h2 className="font-semibold text-[17px]">Rp.{produk.price}</h2>
                            </div>
                        </div>
                    </Link>
                    </div>
            ))}
        </div>
    )
}

export default ProductList;
