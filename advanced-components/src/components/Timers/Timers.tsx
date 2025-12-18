import { useTimersContext } from "../../store/timers-context";
import Timer from "../Timer/Timer";
import cl from './Timers.module.css';

const Timers = () => {
    const { timers } = useTimersContext();
    return (
        <ul className={cl.Wrapper}>
            {
                timers.map(t => <li key={t.name}>
                    <Timer {...t} />
                </li>)
            }
        </ul>
    );
}
 
export default Timers;