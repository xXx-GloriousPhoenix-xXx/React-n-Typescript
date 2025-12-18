import { useRef, forwardRef, useImperativeHandle } from "react"
import type { ComponentPropsWithoutRef, FormEvent } from "react";

import cl from './Form.module.css';

type FormProps = {
    onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<'form'>

export type FormHandle = {
    clear: () => void;
}

const Form = forwardRef<FormHandle, FormProps>((
    { onSave, children, ...props }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
                console.log("Cleared");
            }
        };
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
        form.current?.reset();
    }
    return (
        <form className={cl.Wrapper}
            onSubmit={e => handleSubmit(e)} ref={form} {...props}>
            {children}
        </form>
    );
});

export default Form;