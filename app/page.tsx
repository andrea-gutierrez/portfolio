import Image from "next/image";
import {faBriefcase, faEnvelope, faThumbsUp, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <main
            className="flex flex-col-reverse m-2 md:m-0 md:flex-row gap-5 justify-center md:h-screen">
            <div className="flex flex-col md:w-1/2 justify-center gap-5">
                <div className="flex flex-col items-center justify-center">
                    <h1>Hi there, I am <span
                        className="highlighted">Maribel Gutierrez!</span></h1>

                    <p className="main--text">I am a software engineer with B.Eng. in Electronic with over 6 years of
                        experience as a
                        Front-End and Fullstack developer. I have experience in industries such as software development,
                        industrial automation and also in the IoT.</p>
                </div>
                <a className="rounded md:w-40 p-2 mx-auto button--primary text-center font-bold" target="_blank"
                   href="/cv/Maribel_Gutierrez.pdf">Download Resume</a>

                <div className="button-container flex-wrap justify-center mt-6">

                    <a href="/about" className="section-button flex flex-row items-center gap-2"><FontAwesomeIcon icon={faUser} width={15}
                                                                                                                  height={15}/> About Me</a>

                    <a href="/project" className="section-button flex flex-row items-center gap-2"><FontAwesomeIcon icon={faBriefcase} width={15}
                                                                                                                     height={15}/> Projects</a>

                    <a href="/recommendations" className="section-button flex flex-row items-center gap-2"><FontAwesomeIcon icon={faThumbsUp} width={15}
                                                                                           height={15}/> Recommendations</a>

                    <a href="/contact" className="section-button flex flex-row items-center gap-2"><FontAwesomeIcon icon={faEnvelope} width={15}
                                                                                   height={15}/> Contact Me</a>
                </div>
            </div>
            <div className="profile--container--image">
                <Image className="profile--image w-[300px] md:w-[350px]" height={0} width={0}
                       sizes="100vw" priority={true} alt="maribel_profile"
                       src="/images/profile/maribel.jpeg"/>
            </div>
        </main>
    );
}
