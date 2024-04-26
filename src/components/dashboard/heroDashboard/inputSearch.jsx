"use router"

import { useRouter } from "next/router"
import { useRef } from "react"

const InputSearch = () => {

    const searchRef = useRef()
    // const router = useRouter()

    const handleSearch = () => {
        const keyword = searchRef.current.value
        console.log(keyword)
    }

    return(
        <input type="text" placeholder="Cari apa hayo?" className="p-2 rounded-lg w-full text-[14px]" onKeyDown={handleSearch} ref={searchRef}/>
    )
}

export default InputSearch