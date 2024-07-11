import {ReactNode} from "react";
import {Navbar} from "@/components";

import style from "@/app/(profesional-session)/professional-session.module.css";

export default function ProfessionalSessionsLayout({children}: { children: ReactNode }) {
    return (
        <>
            <Navbar/>
            <main className={`${style['main--content']} min-h-screen m-6`}>
                {children}
            </main>
        </>
    )
}