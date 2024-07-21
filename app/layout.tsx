import type {Metadata} from "next";
import {Roboto_Condensed} from "next/font/google";

import { Analytics } from "@vercel/analytics/react"

import "./globals.css";

const inter = Roboto_Condensed({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Maribel Gutierrez - Frontend Developer & Electronic Engineer",
    description: 'Explore Maribel Gutierrez\'s portfolio showcasing over 6 years of experience as a passionate frontend developer and electronic engineer. Discover innovative projects like Eira Respiratory Equipment, crafted with expertise in React.js, Vue.js, Angular, and JavaScript. Connect to collaborate on creating visually stunning, high-performing web applications.',
    keywords: 'Frontend Developer, Electronic Engineer, Angular Development, IoT Solutions, TDD (Test-Driven Development), HTML5, CSS3, JavaScript'
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        <Analytics />
        </body>
        </html>
    );
}
