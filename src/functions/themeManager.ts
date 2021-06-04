import { useEffect, useState } from 'react';

export const ThemeManager = () => {
    const [theme, setTheme] = useState(false);

    const setMode = (mode:boolean) => {
        window.localStorage.setItem('theme', JSON.stringify(mode));
        setTheme(mode);
    };

    const themeToggler = () => {
        theme ? setMode(false) : setMode(true)
    };

    useEffect(() => {
        const localStorage = window.localStorage.getItem('theme');
        localStorage && setTheme(JSON.parse(localStorage));
    }, []);
    
    const themeProp = {
        theme: theme,
        themeToggler: themeToggler,
    };

    return themeProp;
};