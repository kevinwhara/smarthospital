"use client"

import React, { useState } from "react";
import Image from "next/image"
import logoGreen from "@/image/logo-only.svg"
import coverLogin from "@/image/coverLogin.svg"
import Link from "next/link";

const Login = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState('')
    const [showModal, setShowModal] = useState(false)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const dataProfile = {
            name,
            mail,
            password,
            checkbox,
        }

        const Name = dataProfile.name
        const Mail = dataProfile.mail
        const Password = dataProfile.password
        
        if (Name === 'MEDGUARD' && Mail === 'MEDGUARD' && Password === 'MEDGUARD') {
            console.log('Bisa Masuk')
            setShowModal(true)
        } else {
            console.log('salah bang')
        }
        console.log(dataProfile)
    }

    return(
        <div className="flex flex-row justify-center h-screen items-center">

            {/* form */}
            <div className={`flex flex-col gap-6 border border-r-0 py-[83px] p-14 rounded-l-xl ${showModal ? 'blur-sm' : ''}`}>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2 items-center cursor-help">
                        <Image src={logoGreen} className="size-12"/>
                        <h1 className="font-bold text-color-accent text-[38px]">MEDGuard</h1>
                    </div>
                    <h2 className="font-normal text-color-dark text-[17px]">Lets Start by make an Account!</h2>
                </div>

                <div className="flex flex-col gap-4 ">
                    <input id="fullname" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="border p-2 rounded text-color-accent placeholder-color-accent" />
                    <input id="mail" type="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Email" className="border p-2 rounded text-color-accent placeholder-color-accent"/>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 rounded text-color-accent placeholder-color-accent"/>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2 items-center text-color-accent">
                        <input type="checkbox" id="checkbox" value={checkbox} onChange={(e) => setCheckbox(e.target.value)}/>
                        <h1 className="text-sm">Do you Agree <u>Terms and Service</u></h1>
                    </div>
                    <div>
                        <button id="btn-save" type="button" onClick={handleSubmitForm} className="p-2 px-8 rounded-3xl bg-color-accent text-color-primary">Next</button>
                    </div>
                </div>


            </div>

            {/* modal */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-10">
                        <div className="flex flex-col gap-1 p-8 rounded-lg bg-color-background shadow-lg">
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold mb-4">Welcome {name}</h1>
                                <p className="text-sm">You have successfully logged in.</p>
                            </div>
                            <Link href='/dashboard' className="mt-4 px-4 py-2 bg-color-accent rounded text-center text-color-background">Continue</Link>
                        </div>
                    </div>
                )}

            <div className={`h-fit size-[418px] ${showModal ? 'blur-sm' : ''}`}>
                <Image src={coverLogin} className="rounded-r-xl"/>
            </div>

        </div>
        
    )
}

export default Login