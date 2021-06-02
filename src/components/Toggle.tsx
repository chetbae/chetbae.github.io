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
            <typography.BodyFancy>{!theme ? 'dark' : 'light'}</typography.BodyFancy>
        </StyledButton>
    )
}