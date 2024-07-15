import {ReactNode} from "react";
import {Navbar} from "@/components";

import style from "@/app/(profesional-session)/professional-session.module.css";

export default function ProfessionalSessionsLayout({children}: { children: ReactNode }) {
    return (
        <>
            <Navbar/>
            <main className={`${style['main--content']} min-h-[calc(100vh-49.6px)] m-2 md:m-6`}>
                {children}
            </main>
        </>
    )
}