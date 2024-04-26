"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import verifyIcon from "@/image/dashboard/verification.svg"
import ProductDetail from '@/components/dashboard/pageProduct';

const Page = ({ params: { id } }) => {
    const [products, setProducts] = useState([]);
    const [searchedProduct, setSearchedProduct] = useState(null);
    const [showPayment, setShowPayment] = useState(false)
    const [showReedem, setShowReedem] = useState(false)

    const searchProductById = (productId) => {
        const foundProduct = products.find(product => product.id === productId);
        return foundProduct;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (id && products.length > 0) {
            const foundProduct = searchProductById(parseInt(id));
            setSearchedProduct(foundProduct);
        }
    }, [id, products]);

    const handleOpenPayment = () => {setShowPayment(true)}
    const handleClosePayment = () => {setShowPayment(false)}
    const handleOpenReedem = () => {setShowReedem(true)}
    const handleCloseReedem = () => {setShowReedem(false)}

    const handleBuy = () => {
        handleClosePayment()
        handleOpenReedem()
        handleReedemToBlynk()
        setTimeout(() => {handleGrantedCode()}, 1000)
    }

    const reedemCodeRandom = () => {
        const min = 1000;
        const max = 9000;
        return Math.floor(Math.random() * max) + min
    }

    const reedemCodeResult = reedemCodeRandom()

    const apiBlynk = "https://sgp1.blynk.cloud/external/api/"
    const apiBlynkBatch = "https://sgp1.blynk.cloud/external/api/batch/"
    const token = "token=WOho2CkzoTFXs3L0wqZnTq3zt6c19JEz"

    const handleReedemToBlynk = async() => {
        const response = await fetch(`${apiBlynkBatch}update?${token}&v0=1`)
        return response
        
    }

    const handleGrantedCode = async() => {
        const response = await fetch(`${apiBlynk}get?${token}&v0`)
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <div className={`${showPayment || showReedem ? 'blur-sm' : ''}`}>
                {searchedProduct ? (
                <div>
                    <ProductDetail searchedProduct={searchedProduct} handleClosePayment={handleClosePayment} handleOpenPayment={handleOpenPayment}/>
                </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            {showPayment && (
                <div className='absolute left-[38%] top-[28%] flex flex-col gap-4 bg-color-primary items-center shadow p-6 rounded-xl max-w-96 text-center text-color-accent border'>
                    <Image src={verifyIcon}/>
                    <h1 className='font-bold text-xl'>Pembayaran Berhasil</h1>
                    <p className='font-light text-sm'>Masukan Kode pemesanan ke Vending Mechine terdekat untuk mengambil Obat.</p>
                    <button type="button" onClick={handleBuy} className='bg-color-primary border border-color-grey hover:bg-color-background transition-all p-2 w-full rounded-lg'>Lihat Code</button>
                </div>
            )}
            {showReedem && (
                <div className='flex flex-col gap-4 bg-color-primary absolute top-[30%] left-[38%] p-6 rounded-xl w-[330px] shadow text-color-accent'>
                    <div>
                        <h1 className='font-bold text-2xl'>Kode Pemesanan</h1>
                        <p className='font-normal text-sm'>Masukan Kode pemesanan ke Vending Mechine terdekat untuk mengambil Obat.</p>
                    </div>
                    <div className='border border-b-4 w-fit p-2 rounded'>
                        <h1 className='font-bold text-4xl'>{reedemCodeResult}</h1>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div>
                            <h1 className='font-normal text-sm text-color-grey'>Name</h1>
                            <h2 className='truncate w-40 font-semibold'>{searchedProduct.name}</h2>
                        </div>
                        <div>
                            <h1 className='font-normal text-sm text-color-grey'>Price</h1>
                            <h2 className='font-semibold'>{searchedProduct.price}</h2>
                        </div>
                    </div>
                    <hr className='text-color-grey'/>
                    <div>
                        <h1 className='text-sm text-color-grey'>Total Pembayaran:</h1>
                        <h2 className='font-bold text-xl'>Rp.{searchedProduct.price * (1 - searchedProduct.discount / 100)}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;