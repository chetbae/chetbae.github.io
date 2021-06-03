import React, { useEffect } from 'react';
import styled from 'styled-components';
import { typography } from '../styles';

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.background};
    border: none;
    color: ${({ theme }) => theme.secondary};
    text-align: center;
    text-decoration: none;
    position: fixed;
    right: 1rem;
    top: 0;
`;

// toggle 'light  || dark'
const ToggleText = styled.p`
    font-size: 0.9rem;
    padding: 0.2rem 0.4rem 0.3rem 0.4rem;
    font-family: "Shippori Mincho B1", sans-serif;
    font-weight: 900;
    word-wrap: normal;
    cursor: pointer;
    letter-spacing: 0.1rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.primary};
    &:hover {
        color: ${({ theme }) => theme.background};
        background-color: ${({ theme }) => theme.tertiary};
    }
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
            <ToggleText>{!theme ? 'dark 🥂' : 'light ☕️'}</ToggleText>
        </StyledButton>
    )
}