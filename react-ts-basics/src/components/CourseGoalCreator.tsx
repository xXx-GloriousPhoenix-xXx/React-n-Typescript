import { type FC, useState } from "react";
import type ICourseGoal from "./ICourseGoal";

interface ICourseGoalCreator {
    onAddGoal: (goal: ICourseGoal) => void;
}

const CourseGoalCreator: FC<ICourseGoalCreator> = ({ onAddGoal }) => {
    const [ title, setTitle ] = useState<string>('');
    const [ description, setDescription ] = useState<string>('');
    
    return (
        <form action="submit">
            <input type="text" placeholder="Goal Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="text" placeholder="Goal Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button 
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    const newGoal: ICourseGoal = {
                        id: Math.random().toString(),
                        title,
                        description
                    };
                    onAddGoal(newGoal);
                }}
            >
                Add Goal
            </button>
        </form>
    );
};

export default CourseGoalCreator;