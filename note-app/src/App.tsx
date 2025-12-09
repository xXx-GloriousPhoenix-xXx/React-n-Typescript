import './App.css';

import { useState } from 'react';

import type ICourseGoal from './components/CourseGoal/ICourseGoal';

import CourseGoalList from './components/CourseGoalList/CourseGoalList';
import Header from './components/Header/Header';
import CourseGoalCreator from './components/CourseGoalCreator/CourseGoalCreator';

import headerLogo from './assets/goal.avif';

function App() {
    const initialGoals: ICourseGoal[] = [
        { id: '1', title: 'Learn TypeScript', description: 'Understand the basics of TypeScript and how to use it with React.' },
        { id: '2', title: 'Build a React App', description: 'Create a simple React application using TypeScript.' },
        { id: '3', title: 'Master Type Safety', description: 'Learn how to leverage TypeScript for better type safety in your projects.' },
        { id: '4', title: 'Explore Advanced Concepts', description: 'Dive into advanced TypeScript features and best practices.' }
    ] 
    const image = {
        src: headerLogo,
        alt: "goal logo"
    }
    const [goals, setGoals] = useState<ICourseGoal[]>(initialGoals);
    function handleAddGoal(title: string, description: string) {
        const newGoal: ICourseGoal = {
            id: Math.random().toString(),
            title,
            description
        }

        setGoals(prevGoals => [...prevGoals, newGoal]);
    }
    function handleDeleteGoal(id: string) {
        setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
    }

    return (
        <main>
            <Header image={image}>
                <h1>Course Goals</h1>
            </Header>
            <CourseGoalCreator
                onAddGoal={handleAddGoal}
            />
            <CourseGoalList
                goals={goals}
                onDeleteGoal={handleDeleteGoal}
            />
        </main>
    )
}

export default App
