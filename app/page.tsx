import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main
            className="flex flex-row gap-5 justify-center my-auto bg-gradient-to-b from-blue-950 to-cyan-700 h-screen">
            <div className="flex flex-col w-1/2 justify-center gap-5">
                <div className="flex flex-col items-center justify-center border--main__top">
                    <p className="text-5xl">Hi, I am <span
                        className="text-yellow-700 font-bold">Maribel Gutierrez</span>!</p>

                    <p className="text-2xl">I am a software engineer with B.Eng. in Electronic with over 6 years of
                        experience as a
                        Front-End and Fullstack developer</p>
                </div>
                <button className="rounded border-red-500 border-2 text-yellow-300 w-40 p-2 mx-auto">Resume</button>

                {/*<div className="flex flex-row gap-3 justify-center text-lg mt-4">
                    <Link href="/about" className="outline outline-offset-2 outline-cyan-500">About me</Link>
                    <Link href="/project" className="outline outline-offset-2 outline-cyan-500">Projects</Link>
                    <Link href="/recommendation"
                          className="outline outline-offset-2 outline-cyan-500">Recommendations</Link>
                    <Link href="/contact" className="outline outline-offset-2 outline-cyan-500">Contact me</Link>
                </div>*/}
            </div>
            <div className="flex items-center justify-center">
                <Image className="rounded-lg rotate-12" style={{height: '500px', width: 'auto'}} height={0} width={0} sizes="100vw" priority={true} alt="maribel_profile"
                       src="/images/profile/maribel_1.jpg"/>
            </div>
        </main>
    );
}
