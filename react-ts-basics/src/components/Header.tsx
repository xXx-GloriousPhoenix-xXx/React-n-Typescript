import { type FC, type ReactNode } from 'react';

import cl from './Header.module.css';

interface IHeader {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
}

const Header: FC<IHeader> = ({ image, children }) => {
    const { src, alt } = image;
    return (
        <header className={cl.Wrapper}>
            <img src={src} alt={alt} />
            {children}
        </header>
    );
}

export default Header;