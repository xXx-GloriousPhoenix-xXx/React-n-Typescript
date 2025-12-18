import { type ComponentPropsWithoutRef } from 'react';
import cl from './Button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never,
}
type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string
}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props;
}

const Button = (props: ButtonProps | AnchorProps) => {
    return <div className={cl.Wrapper}>
        {
            isAnchorProps(props)
            ? <a {...props}></a>
            : <button {...props}></button>
        }
    </div>
}
export default Button;

