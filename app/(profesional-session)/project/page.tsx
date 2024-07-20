import ProjectCard from "@/app/(profesional-session)/project/components/ProjectCard";

import {PROJECT_LIST} from "@/app/(profesional-session)/project/constants";

import style from './project.module.css';

export default function ProjectPage() {
    return (
        <>
            <h1>Projects</h1>
            <p>Welcome to the Projects section of my portfolio! Here, you'll find a showcase of my most notable
                frontend development projects that highlight my technical skills and creative problem-solving
                abilities.</p>
            <div className={style["projects-grid"]}>
                {
                    PROJECT_LIST.map(project => (
                        <ProjectCard key={project.title} {...project} />
                    ))
                }
            </div>
        </>
    )
}