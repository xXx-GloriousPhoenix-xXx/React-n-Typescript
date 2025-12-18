import { useRef } from "react";

import Button from './UI/Button/Button.tsx';
import Form, { type FormHandle } from './UI/Form/Form.tsx';
import Input from './UI/Input/Input.tsx';
import { useTimersContext } from "../store/timers-context.tsx";

const AddTimer = () => {
    const form = useRef<FormHandle>(null);
    const { addTimer } = useTimersContext();

    function handleSaveTimer (data: unknown) {
        const extractedData = data as { name: string; duration: string; };
        addTimer({
            name: extractedData.name,
            duration: +extractedData.duration
        });
        form.current?.clear();
    }

    return (  
        <Form ref={form} onSave={handleSaveTimer} id="add-timer">
            <Input type='text' label="Name" id='name' />
            <Input type='number' label="Duration" id='duration' />
            <div>
                <Button>Add Timer</Button>
            </div>
        </Form>
    );
}
 
export default AddTimer;