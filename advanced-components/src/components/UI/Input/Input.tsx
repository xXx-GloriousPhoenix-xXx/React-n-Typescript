import cl from './Input.module.css';

import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

type InputProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>((
    { id, label, ...props }, 
    ref) => {
    return (
        <div className={cl.Wrapper}>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id}
                placeholder={`Enter ${label.toLowerCase()}...`}
                ref={ref}
                name={id}
                {...props}
            />
        </div>
    );
})
 
export default Input;