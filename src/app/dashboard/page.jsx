"use client"

import HeroDashboard from "@/components/dashboard/heroDashboard";
import ProduckList from "@/components/dashboard/produkList";
import React, { useEffect, useState } from 'react';

const Page = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/api/products'); // Endpoint API lokal
            const data = await response.json();
            setProducts(data);
        } catch (error) {
        }
    };

    fetchData();
  }, []);

    return (
        <main className="flex flex-col gap-12">
            <section>
                <HeroDashboard/>
            </section>
        <section>
            <ProduckList product={products}/>
        </section>
        </main>
    );
};

export default Page;
