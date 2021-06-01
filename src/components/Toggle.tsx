import React, { useEffect } from 'react';
import styled from 'styled-components';
import { typography } from '../styles';

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.background};
    border: none;
    color: ${({ theme }) => theme.secondary};
    padding: 0.2rem 0.6rem;
    margin: 1rem;
    text-align: center;
    text-decoration: none;
    position: fixed;
    right: 0;
    top: 0;
`;

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
        <StyledButton onClick={toggleTheme}>
            <typography.HeadingFancy>{!theme ? 'dark' : 'light'}</typography.HeadingFancy>
        </StyledButton>
    )
}