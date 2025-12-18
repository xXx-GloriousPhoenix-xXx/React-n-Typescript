import './App.css'

import Timers from './components/Timers/Timers.tsx';
import AddTimer from './components/AddTimer';
import Header from './components/Header/Header';

import TimersContextProvider from './store/timers-context.tsx';

function App() {
    return (
        <TimersContextProvider>
            <section>
                <Header />
                <main>
                    <AddTimer />
                    <Timers />
                </main>
            </section>
        </TimersContextProvider>
    );
}

export default App
