import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: none;
    border: none;
    color: ${( props:any ) => props.theme.secondary};
    position: fixed;
    right: 1%;
    top: 0.5%;
`;

// toggle 'light  || dark'
const ToggleText = styled.p`
    font-size: 0.9rem;
    padding: 0.2rem 0.4rem 0.3rem 0.4rem;
    font-family: "Shippori Mincho B1", sans-serif;
    font-weight: 900;
    cursor: pointer;
    letter-spacing: 0.1rem;
    color: ${( props:any ) => props.theme.primary};
    &:hover {
        color: ${( props:any ) => props.theme.background};
        background-color: ${( props:any ) => props.theme.tertiary};
    }
`;

// type-ing for componenet
interface IMyProps {
    theme: boolean,
    themeToggler: () => void,
}

export const Toggle: React.FC<IMyProps> = (props: IMyProps) => {
    const { theme, themeToggler } = props;

    return(
        <StyledButton onClick={themeToggler}>
            <ToggleText>{theme ? 'dark 🥂' : 'light ☕️'}</ToggleText>
        </StyledButton>
    )
}