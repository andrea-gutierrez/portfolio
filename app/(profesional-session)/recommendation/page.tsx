import React from "react";

import style from '../professional-session.module.css';
import recommendationStyle from '../professional-session.module.css';

import Blockquote from "@/components/blockquote/Blockquote";

import {RECOMMENDATION_LIST} from './constants';


export default function RecommendationPage() {
    return (
        <>
            <h1 className={style.subtitle}>Recommendations</h1>

            <div className={`${recommendationStyle["recommendation--introduction"]} mb-3`}>
                <p>
                    Welcome to my recommendations page. Here, you will find testimonials and endorsements from
                    colleagues I've had the pleasure of working with throughout my career. These
                    recommendations highlight my skills, work ethic, and professional relationships. Feel free to read
                    through them to get a better understanding of my capabilities and the value I can bring to your
                    team.
                </p>
            </div>

            <div className="m-3 md:m-6">
                {
                    RECOMMENDATION_LIST.map(recommendation => (
                        <Blockquote key={recommendation.author} {...recommendation} />
                    ))
                }

            </div>

        </>
    )
}