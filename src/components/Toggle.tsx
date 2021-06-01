import React, { useEffect } from 'react';

// type-ing for componenet
interface IMyProps {
    theme: boolean,
    setTheme: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Toggle: React.FC<IMyProps> = (props: IMyProps) => {
    const { theme, setTheme } = props;

    // on render update theme from local storage
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(!JSON.parse(localTheme))
    }, [setTheme]);

    function toggleTheme() {
        if (theme) setTheme(false);
        else setTheme(true);
        window.localStorage.setItem('theme', JSON.stringify(theme))
    }

    return(
        <button onClick={toggleTheme}>
            {theme ? 'dark' : 'light'}
        </button>
    )
}