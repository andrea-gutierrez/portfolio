"use client"

import {ActiveLink} from "@/components";

import style from './Navbar.module.css';
import {useState} from "react";

interface NavItems {
    path: string;
    text: string;
}

const navItems: NavItems[] = [
    {path: '/', text: 'Home'},
    {path: '/about', text: 'About'},
    {path: '/project', text: 'Projects'},
    {path: '/recommendation', text: 'Recommendations'},
    {path: '/contact', text: 'Contact'},
]

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const handleNavbarMenu = () => {
        setNavbar(!navbar);
    };

    return (
        <nav className={`flex items-center justify-between flex-wrap ${style.navbar}`}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Maribel Gutiérrez</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white"
                    onClick={() => handleNavbarMenu()}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className={`${navbar && 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    {
                        navItems.map(navItem => (
                            <ActiveLink key={navItem.path} {...navItem} />
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}