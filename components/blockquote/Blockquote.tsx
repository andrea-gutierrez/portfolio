"use client"

import React, {useLayoutEffect, useState} from "react";

import style from "./blockquote.module.css";

const useTruncatedElement = ({ref}: any) => {
    const [isTruncated, setIsTruncated] = useState(false);
    const [isShowingMore, setIsShowingMore] = useState(false);

    useLayoutEffect(() => {
        const {offsetHeight, scrollHeight} = ref.current || {};

        if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
            setIsTruncated(true);
        } else {
            setIsTruncated(false);
        }
    }, [ref]);

    const toggleIsShowingMore = () => setIsShowingMore(prev => !prev);

    return {
        isTruncated,
        isShowingMore,
        toggleIsShowingMore,
    };
};

export default function Blockquote({message, profession, author, company}: {
    message: string;
    author: string;
    profession: string;
    company: string
}) {
    const ref = React.useRef(null);
    const {isShowingMore, toggleIsShowingMore} = useTruncatedElement({
        ref,
    });

    return (
        <div className={style.recommendation}>
            <blockquote ref={ref} className={`${!isShowingMore && "line-clamp-5"}`}>
                <p dangerouslySetInnerHTML={{__html:message}}>
                </p>
            </blockquote>

            <div className={style.author}>- {author} {profession} at {company}</div>
            <button onClick={toggleIsShowingMore} className={`${style["show-more"]}`}>
                {isShowingMore ? 'Show less' : 'Show more'}
            </button>
        </div>
    )
}