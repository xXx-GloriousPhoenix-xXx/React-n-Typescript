import { type FC } from 'react';
import type ICourseGoal from './ICourseGoal';
import CourseGoal from './CourseGoal';

import cl from './CourseGoalList.module.css';

interface ICourseGoalList {
    goals: ICourseGoal[];
    onDeleteGoal: (id: string) => void;
}

const CourseGoalList: FC<ICourseGoalList> = ({ goals, onDeleteGoal }) => {
    return (
        <section className={cl.Wrapper}>
            {
                goals.map(goal => (
                    <CourseGoal
                        key={goal.id}
                        id={goal.id}
                        title={goal.title}
                        description={goal.description}
                        onDelete={() => onDeleteGoal(goal.id)}
                    />
                ))
            }
        </section>
    );
}

export default CourseGoalList;