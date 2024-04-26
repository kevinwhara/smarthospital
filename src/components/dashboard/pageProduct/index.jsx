import Image from "next/image";
import logoWhite from "@/image/logoWhite.svg"
import diskonCard from "@/image/dashboard/diskonCard02.svg"
import CardTestimoni from '@/components/landingPage/Testimoni/cardTestimoni';
import logogreen from "@/image/logo-only.svg"

const ProductDetail = ({searchedProduct, handleOpenPayment}) => {
    return(
        <div>
            <div className='flex flex-col justify-center h-screen'>
                <div className='flex flex-row gap-2 items-center ml-32 mb-10'>
                    <Image src={logogreen} className='size-14'/>
                    <h1 className='font-bold text-4xl text-color-accent'>MEDGuard</h1>
                </div>
                <div className="flex flex-row gap-20 justify-center h-[490px]">
                    
                    <div className="flex flex-col gap-5">
                        <div className="w-fit rounded-2xl border relative border-color-grey">
                            <img src={searchedProduct.imageURL} className='size-[266px]'/>
                            <div className="flex flex-row absolute gap-1 text-color-primary p-2 w-fit items-center top-0 rounded-tl-[15.5px] rounded-br-xl bg-color-accent">
                                <Image src={logoWhite} className="size-4"/>
                                <h1 className="text-xs">MEDGuard</h1>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 text-center border border-color-grey rounded-lg p-4 w-fit">
                            <div>
                                <h1 className='text-color-grey font-medium text-xs'>{searchedProduct.rating}</h1>
                                <h2 className='text-color-accent font-medium text-sm'>Ulasan</h2>
                            </div>
                            <div>
                                <h1 className='text-color-grey font-medium text-xs'>{searchedProduct.stock}</h1>
                                <h2 className='text-color-accent font-medium text-sm'>Stok Banyak</h2>
                            </div>
                            <div>
                                <h1 className='text-color-grey font-medium text-xs'>100%</h1>
                                <h2 className='text-color-accent font-medium text-sm'>Terpercaya</h2>
                            </div>
                        </div>
                        <div>
                            <button type="button" onClick={handleOpenPayment} className='bg-color-primary text-color-accent hover:bg-color-background transition-all cursor-pointer border border-color-grey rounded-lg p-4 px-[122px] justify-center w-fit'>Beli</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <h1 className='font-bold text-color-accent text-3xl'>{searchedProduct.name}</h1>
                                <h2 className='font-light text-color-accent text-base'>Per {searchedProduct.per}</h2>
                            </div>
                            <div>
                                <div className='flex flex-row  gap-2 items-center'>
                                    <h1 className='font-semibold text-3xl text-color-accent'>Rp.{searchedProduct.price * (1 - searchedProduct.discount / 100)}</h1>
                                    <div className="relative">
                                        <div className='absolute top-1 left-3 flex flex-row gap-1 text-color-primary text-sm'>
                                            <h1>Dics</h1>
                                            <h2 className='font-semibold'>{searchedProduct.discount}%</h2>
                                        </div>
                                        <Image src={diskonCard}/>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='font-semibold text-2xl text-color-grey line-through'>Rp.{searchedProduct.price}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <div className='text-color-accent max-w-96'>
                                <h1 className='font-semibold'>Deskripsi</h1>
                                <h2 className='font-normal text-sm'>{searchedProduct.description}</h2>
                            </div>
                            <div className='text-color-accent max-w-96'>
                                <h1 className='font-semibold'>Dosis</h1>
                                <h2 className='font-normal text-sm'>{searchedProduct.dosis}</h2>
                            </div>
                            <div className='text-color-accent max-w-96'>
                                <h1 className='font-semibold'>Kandungan</h1>
                                <h2 className='font-normal text-sm'>{searchedProduct.kandungan}</h2>
                            </div>
                        </div>
                    </div>
                    <hr className='border border-color-grey h-[450px]'/>
                    <div className='flex flex-col gap-4 items-center'>
                        <div className='flex flex-col gap-4 w-[385px]'>
                            <CardTestimoni nama={'bintangreal1445'} isi={'Harga vitaminNya terjangkau'}/>
                            <CardTestimoni nama={'bintangreal1445'} isi={'Harga vitaminNya terjangkau'}/>
                            <CardTestimoni nama={'bintangreal1445'} isi={'Harga vitaminNya terjangkau'}/>
                        </div>
                        <div>
                            <button type="button" className='bg-color-accent bg-opacity-30 text-color-accent p-2 px-3 rounded-xl font-medium'>Muat Lebih Banyak</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail