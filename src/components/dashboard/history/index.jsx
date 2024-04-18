"use client"

import { useState } from "react"

const HistoryBar = () => {

    const [orderedMed, setOrderedMed] = useState(false)

    while (orderedMed === true) {
        
    }

    return (
        <div className="bg-color-background py-2 px-4 w-72">
            <div>
                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-[24px] text-color-accent">Riwayat <br/>Pemesanan</h1>
                    <button className="bg-color-accent h-fit px-2 py-1 text-color-primary rounded">clear</button>
                </div>
            </div>
            <div className="">
                <h1 className="font-medium text-10 text-opacity-15">You haven't ordered anything</h1>
            </div>
        </div>
    )
}

export default HistoryBar