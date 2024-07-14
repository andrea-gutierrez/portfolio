import style from '../professional-session.module.css';

import {
    faHtml5,
    faJs,
    faCss3,
    faPython,
    faNode,
    faAngular,
    faReact, faGit, faGithub
} from '@fortawesome/free-brands-svg-icons'
import {faDatabase, faCode, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {TechStackList} from "@/components";
import Image from "next/image";

interface IconName {
    icon: IconDefinition;
    name: string;
}

const languages: IconName[] = [
    {
        icon: faHtml5,
        name: 'HTML5'
    },
    {
        icon: faCss3,
        name: 'CSS3'
    },
    {
        icon: faJs,
        name: 'Javascript'
    },
    {
        icon: faPython,
        name: 'Python'
    },
    {
        icon: faNode,
        name: 'NodeJS'
    },
    {
        icon: faCode,
        name: 'C++'
    }
]

const frameworks: IconName[] = [
    {
        icon: faAngular,
        name: 'Angular'
    },
    {
        icon: faReact,
        name: 'React'
    },
    {
        icon: faCode,
        name: 'Svelte'
    },
    {
        icon: faCode,
        name: 'NextJs'
    },
    {
        icon: faCode,
        name: 'NestJs'
    }
]

const database: IconName[] = [
    {
        icon: faDatabase,
        name: 'MySQL'
    },
    {
        icon: faCode,
        name: 'MongoDB'
    }
]

const tools: IconName[] = [
    {
        icon: faGit,
        name: 'git'
    },
    {
        icon: faGithub,
        name: 'GitHub'
    }
]

const testing: IconName[] = [
    {
        icon: faCode,
        name: 'Jest'
    },
    {
        icon: faCode,
        name: 'Cypress'
    },
    {
        icon: faCode,
        name: 'Karma'
    }
]

export default function AboutPage() {
    return (
        <>
            <section className={`${style["main--section"]} flex flex-col md:flex-row gap-3`}>
                <div className="info">
                    <h1 className={style.subtitle}>About me</h1>
                    <p>I'am Maribel, a passionate frontend developer with over 6 years of experience in crafting
                        visually
                        stunning and highly functional web applications. My journey began with a foundation in
                        electronic
                        engineering, which provided me with a deep understanding of both hardware and software. However,
                        it
                        was in the realm of frontend development where I truly found my calling.
                    </p>
                    <br/>
                    <p>I thrive on bringing designs to life with clean, efficient, and scalable code. My experience
                        includes leading frontend development initiatives that enhance application performance and
                        scalability, collaborating closely with UX/UI designers to transform design concepts into
                        pixel-perfect implementations. One of my proudest achievements is working on innovative projects
                        that address real-world problems, such as the Eira Respiratory Equipment during the COVID-19
                        pandemic, where I integrated intuitive software interfaces with robust hardware to create
                        life-saving devices. Beyond my technical skills, I am a proactive problem-solver who enjoys
                        learning
                        and staying up-to-date with the latest industry trends. Let's connect and explore how we can
                        create
                        beautiful, high-performing web applications together!</p>

                </div>
                <Image src="/images/projects/python_interface.jpg" alt="maribel_working" height={200} width={200}
                       style={{objectFit: 'cover'}}/>
            </section>

            <section
                className="transition ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-105 flex flex-row flex-wrap hover:flex-wrap-reverse gap-2 justify-around m-6">

                <TechStackList items={tools} title={'Tools'}/>

                <TechStackList items={database} title={'Databases'}/>

                <TechStackList items={testing} title={'Testing Frameworks and Libraries'}/>

                <TechStackList items={frameworks} title={'Frameworks'}/>

                <TechStackList items={languages} title={'Languages'}/>
            </section>

        </>
    )
}