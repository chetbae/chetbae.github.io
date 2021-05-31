import { useEffect, useState } from 'react';

export const ChangeDarkMode = () => {
    const [theme, setTheme] = useState('light');
    
    const themeToggler = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
        } 
        else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
        }
        console.log("1")
        return theme;
    }
    
    useEffect(() => {
        const session = window.localStorage.getItem('theme');
        if (session) setTheme(session);
        console.log(theme)
    }, []);
    return [theme, themeToggler];
}

// export {};