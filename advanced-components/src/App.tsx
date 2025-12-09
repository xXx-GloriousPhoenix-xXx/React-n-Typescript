import './App.css'

import Input from './components/Input/Input.tsx';

function App() {
    return(
        <main>
            <Input 
                id="first-name" 
                label="First Name"
            />
            <Input 
                id="last-name" 
                label="Last Name"
            />
        </main>
    );
}

export default App
