import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import style from "./TechStackList.module.css";

export const TechStackList = ({items, title}: { items: { icon: any; name: string }[], title: string }) => {
    return (
        <div className={`${style["tech-category"]} mt-6 md:w-1/4`}>
            <h2>{title}</h2>
            <div className={`${style["tech-stack"]} mt-5`}>
                {
                    items.map((item: any) => (
                        <div key={item.name} className={`${style["tech-item"]}`}>
                            <FontAwesomeIcon icon={item.icon} width={30} height={30}/>
                            <div className={style["tech-name"]}>{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}