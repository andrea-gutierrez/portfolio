"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

import style from './ActiveLink.module.css';

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({path, text}: Props) => {
    const patchName = usePathname();
    return (
        <Link
            className={`${style.link} ${(patchName === path) && style['active-link']} block mt-4 lg:inline-block lg:mt-0 mr-4`} href={path}>
            {text}
        </Link>
    )
}