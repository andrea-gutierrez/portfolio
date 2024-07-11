import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main
            className="flex flex-row gap-5 justify-center my-auto h-screen">
            <div className="flex flex-col w-1/2 justify-center gap-5">
                <div className="flex flex-col items-center justify-center">
                    <h1>Hi there, I am <span
                        className="highlighted">Maribel Gutierrez!</span></h1>

                    <p className="main--text">I am a software engineer with B.Eng. in Electronic with over 6 years of
                        experience as a
                        Front-End and Fullstack developer. I have experience in industries such as software development,
                        industrial automation and also in the IoT.</p>
                </div>
                <button className="rounded w-40 p-2 mx-auto button--primary">Resume</button>

                <ul className="flex flex-row gap-3 justify-center text-lg mt-4 mx-auto section--list">
                    <Link href="/about">About me</Link>
                    <Link href="/project">Projects</Link>
                    <Link href="/recommendation"
                    >Recommendations</Link>
                    <Link href="/contact">Contact me</Link>
                </ul>
            </div>
            <div className="profile--container--image">
                <Image className="profile--image" height={250} width={250}
                       sizes="100vw" priority={true} alt="maribel_profile"
                       src="/images/profile/maribel_1.jpg"/>
            </div>
        </main>
    );
}
