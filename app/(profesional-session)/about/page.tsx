import style from '../professional-session.module.css';

import {
    faHtml5,
    faCss3Alt,
    faJs,
    faCss3,
    faPython,
    faNode,
    faAngular,
    faReact
} from '@fortawesome/free-brands-svg-icons'
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
import {IconList} from "@/components/icon-list/IconList";

const languages = [
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
        icon: faQuestion,
        name: 'C++'
    }
]

const frameworks = [
    {
        icon: faAngular,
        name: 'Angular'
    },
    {
        icon: faReact,
        name: 'React'
    },
    {
        icon: faQuestion,
        name: 'Svelte'
    },
    {
        icon: faQuestion,
        name: 'NextJs'
    },
]

export const metadata = {
    title: "About",
    description: 'Information about Maribel',
    keywords: 'CSS3, HTML5, Angular, NextJS, NodeJS, Javascript'
}

export default function AboutPage() {
    return (
        <>
            <section className={style["main--section"]}>
                <h1 className={style.subtitle}>About me</h1>
                <p>I am a senior fullstack developer with more than 6 years of experience in the software development,
                    IoT
                    and the automation industry. </p>
                <p>I am a software developer who has had the opportunity to work in a start--ups and also in a
                    multinational company which had given me the opportunity to be in all the life cycle of a software.
                    I have been in different positions such as developer designer, taking the business requirements</p>
            </section>

            <section>
                <IconList items={languages} title={'Languages'}/>

                <IconList items={frameworks} title={'Frameworks'}/>
            </section>

        </>
    )
}