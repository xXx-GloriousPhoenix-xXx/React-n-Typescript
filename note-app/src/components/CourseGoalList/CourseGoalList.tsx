import { type FC, type ReactNode } from 'react';

import type ICourseGoal from '../CourseGoal/ICourseGoal';

import CourseGoal from '../CourseGoal/CourseGoal';
import InfoBox from '../InfoBox/InfoBox';

import cl from './CourseGoalList.module.css';

interface ICourseGoalList {
    goals: ICourseGoal[];
    onDeleteGoal: (id: string) => void;
}

const CourseGoalList: FC<ICourseGoalList> = ({ goals, onDeleteGoal }) => {
    if (goals.length === 0) {
        return (
            <InfoBox mode={{type: "hint"}}>
                No goals found. Maybe add one?
            </InfoBox>
        );
    }

    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode={{
                type: "warning",
                level:
                    goals.length >= 8 ? "high" :
                    goals.length >= 6 ? "medium" :
                    "low"
            }}>
                You have many goals! Make sure to focus on the most important ones.
            </InfoBox>
        );
    }

    return (
        <>
        {warningBox}
        <section className={cl.Wrapper}>
            {
                goals.map(goal => (
                    <CourseGoal
                        key={goal.id}
                        id={goal.id}
                        title={goal.title}
                        description={goal.description}
                        onDelete={onDeleteGoal}
                    />
                ))
            }
        </section>
        </>
    );
}

export default CourseGoalList;