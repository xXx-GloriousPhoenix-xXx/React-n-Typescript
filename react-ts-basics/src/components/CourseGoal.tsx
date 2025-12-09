import { type FC } from "react";
import type ICourseGoal from "./ICourseGoal";

import cl from './CourseGoal.module.css';

export interface ICourseGoalProps extends ICourseGoal {
    onDelete: (id: number) => void;
}

const CourseGoal: FC<ICourseGoalProps> = ({ id, title, description, onDelete }) => {
    return (
        <article className={cl.Wrapper}>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button 
                className={cl.Button}
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </article>
    )
}

export default CourseGoal;

