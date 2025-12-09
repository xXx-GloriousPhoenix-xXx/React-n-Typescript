import { useRef, type FC, type FormEvent } from "react";

import cl from "./CourseGoalCreator.module.css";

interface ICourseGoalCreator {
    onAddGoal: (title: string, description: string) => void;
}

const CourseGoalCreator: FC<ICourseGoalCreator> = ({ onAddGoal }) => {    
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);

    function handleSubmitGoal(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const goalTitle = title.current!.value;
        const goalDescription = description.current!.value;

        if (goalTitle.trim().length === 0 ||
            goalDescription.length === 0) {
            return;
        }

        e.currentTarget.reset();
        onAddGoal(goalTitle, goalDescription);
    }

    return (
        <form onSubmit={handleSubmitGoal} className={cl.Wrapper}>
            <input id="title" type="text" placeholder="Goal Title" ref={title}/>
            <input id="description" type="text" placeholder="Goal Description" ref={description}/>
            <button type="submit">Add Goal</button>
        </form>
    );
};

export default CourseGoalCreator;