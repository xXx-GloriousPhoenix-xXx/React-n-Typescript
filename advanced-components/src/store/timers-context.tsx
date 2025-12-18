import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";

export type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

const initialState: TimersState = {
    isRunning: false,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export const useTimersContext = () => {
    const timersCtx = useContext(TimersContext);
    if (timersCtx === null) {
        throw new Error("TimersContext is null - that should not be the case!")
    }
    return timersCtx;
}

type TimersContextProviderProps = {
    children: ReactNode;
}

type StartTimersAction = {
    type: 'START_TIMERS';
}
type StopTimersAction = {
    type: 'STOP_TIMERS';
}
type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
}
type Action = StartTimersAction | StopTimersAction | AddTimerAction;

const timersReducer = (state: TimersState, action: Action): TimersState => {
    switch(action.type) {
        case 'ADD_TIMER':
            return {
                ...state,
                timers: [ ...state.timers, action.payload ]
            }
        case 'START_TIMERS':
            return {
                ...state,
                isRunning: true
            }
        case 'STOP_TIMERS':
            return {
                ...state,
                isRunning: false
            }
        default:
            return state;
    }
}

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
    const [timersState, callDispatch] = useReducer(timersReducer, initialState)
    const ctx: TimersContextValue = {
        ...timersState,
        addTimer(timerData) {
            callDispatch({ 
                type: 'ADD_TIMER',
                payload: timerData
            })
        },
        startTimers() {
            callDispatch({ type: 'START_TIMERS' })
        },
        stopTimers() {
            callDispatch({ type: 'STOP_TIMERS' })
        }
    }
    return (
        <TimersContext.Provider value={ctx}>
            {children}
        </TimersContext.Provider>
    )
}
export default TimersContextProvider;