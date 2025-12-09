import cl from './Input.module.css';

import { type FC, type ComponentPropsWithoutRef } from 'react';

interface IInput extends ComponentPropsWithoutRef<'input'> {
    id: string;
    label: string;
}

const Input: FC<IInput> = ({ id, label, ...props }) => {
    return (
        <div className={cl.Wrapper}>
            <label htmlFor={id}>{label}</label>
            <input id={id} placeholder={`Enter ${label.toLowerCase()}...`} {...props}/>
        </div>
    );
}
 
export default Input;