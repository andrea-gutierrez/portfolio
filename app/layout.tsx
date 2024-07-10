import type {Metadata} from "next";
import {Roboto_Condensed} from "next/font/google";

import "./globals.css";

const inter = Roboto_Condensed({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Maribel Gutierrez",
    description: "Frontend and Fullstack developer",
    keywords: "Front End, FullStack, Software Engineer"
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
