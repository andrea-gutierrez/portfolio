import Link from "next/link";

import {ActiveLink} from "@/components";

interface NavItems {
    path: string;
    text: string;
}

const navItems: NavItems[] = [
    {path: '/about', text: 'About'},
    {path: '/projects', text: 'Projects'},
    {path: '/recommendation', text: 'Recommendations'},
    {path: '/contact', text: 'Contact'},
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-500 bg-opacity-30 p-2 m-2 rounded">
            <Link className="flex items-center" href="/">
                <span>M</span>
            </Link>
            <div className="flex flex-1"></div>

            {
                navItems.map((navItem, i) => (
                    <ActiveLink key={navItem.path} {...navItem} />
                ))
            }
        </nav>
    )
}