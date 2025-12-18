import Button from "../UI/Button/Button";
import cl from './Header.module.css';
import { useTimersContext } from "../../store/timers-context";

const Header = () => {
    const timersCtx = useTimersContext();
    const operationState = timersCtx.isRunning ? 'Stop' : 'Start';
    const operationFunction = timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers;
    return (
        <header className={cl.Wrapper}>
            <h1>React Timer</h1>
            <Button onClick={operationFunction}>{operationState} Timers</Button>
        </header>
    );
}
 
export default Header;