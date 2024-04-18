"use client"

import { useState } from 'react';
import Image from "next/image";
import logoWhite from "@/image/logoWhite.svg";
import homeLogo from "@/image/dashboard/Home.svg";
import searchLogo from "@/image/dashboard/Search.svg";
import cartLogo from "@/image/dashboard/Cart.svg";
import accountLogo from "@/image/dashboard/Account.svg";
import notificationLogo from "@/image/dashboard/Notification.svg"
import Link from "next/link";

const SideBar = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return(
        <div className="px-4 py-4  bg-color-accent">
            <div className="flex flex-col h-screen justify-between items-center">
                {/* logo web */}
                <div>
                    <Image src={logoWhite} className="size-12"/>
                </div>
                {/* navbar nya */}
                <nav className="flex flex-col gap-4 items-center">
                    <div className={activeItem === 'home' ? 'bg-color-secondary rounded' : ''} onClick={() => handleItemClick('home')}>
                        <Link href='/dashboard'>
                            <Image src={homeLogo} className='size-10'/>
                        </Link>
                    </div>
                    <div className={activeItem === 'search' ? 'bg-color-secondary rounded' : ''} onClick={() => handleItemClick('search')}>
                        <Link href='/dashboard/search'>
                            <Image src={searchLogo} className='size-10'/>
                        </Link>
                    </div>
                    <div className={activeItem === 'cart' ? 'bg-color-secondary rounded' : ''} onClick={() => handleItemClick('cart')}>
                        <Link href='/dashboard/cart'>
                            <Image src={cartLogo} className='size-10'/>
                        </Link>
                    </div>
                    <div className={activeItem === 'account' ? 'bg-color-secondary rounded' : ''} onClick={() => handleItemClick('account')}>
                        <Link href='/dashboard/account'>
                            <Image src={accountLogo} className='size-10'/>
                        </Link>
                    </div>
                </nav>
                <div className={activeItem === 'notification' ? 'bg-color-secondary rounded' : ''} onClick={() => handleItemClick('notification')}>
                    <Link href='/notification'>
                        <Image src={notificationLogo} className='size-10'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
