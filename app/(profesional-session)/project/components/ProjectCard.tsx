"use client"

import style from "./ProjectCard.module.css";
import Image from "next/image";

import {ProjectDetails} from "../interfaces/project.interface";
import {useState} from "react";

export default function ProjectCard({
                                        challenges,
                                        features,
                                        description,
                                        technologies,
                                        title,
                                        images,
                                        impactOvercome,
                                        hasGithub
                                    }: ProjectDetails) {
    const [isShowingDetails, setIsShowingDetails] = useState<boolean>(false);

    function onShowDetails() {
        setIsShowingDetails(!isShowingDetails);
    }

    return (
        <>
            <div className={style["project-card"]}>
                <div className={style["project-content"]}>
                    <h3 className={style["project-title"]}>{title}</h3>
                    <p className={style["project-description"]}>
                        {description}
                    </p>
                    <button className={style["show-project-button"]} onClick={() => onShowDetails()}>Show Details
                    </button>
                    <div className={`${style["project-details"]}`}
                         style={{display: !isShowingDetails ? 'none' : 'block'}}>
                        <div className="project-overcomes">
                            <h4 className={style["section-subtitle"]}>Impact and Overcome</h4>
                            <p>{impactOvercome}</p>
                        </div>
                        <div className="project-features">
                            <h4 className={style["section-subtitle"]}>Features</h4>
                            <ul>
                                {
                                    features.map(item => (
                                        <li key={item.title}>{item.title}: {item.description}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="project-challenges">
                            <h4 className={style["section-subtitle"]}>Challenges</h4>
                            <ul>
                                {
                                    challenges.map(item => (
                                        <li key={item.title}>{item.title}: {item.description}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="project-technologies">
                            <h4 className={style["section-subtitle"]}>Technologies Used</h4>
                            <ul className={style["technology-list"]}>
                                {
                                    technologies.map(item => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={style["project-media"]}>
                            {
                                images.map(item => (
                                    <Image key={item.src} src={item.src}
                                           alt={item.alt}
                                           style={{objectFit: "cover"}} width={400} height={400}/>
                                ))
                            }
                        </div>
                        {
                            hasGithub &&
                            <div className="flex flex-row gap-3 justify-between">
                                <a href="https://project-link.com" className={style["project-link"]} target="_blank">View
                                    Live
                                    Project</a>
                                <a href="https://github.com/project-repo" className={style["project-link"]}
                                   target="_blank">View
                                    Code on
                                    GitHub</a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}