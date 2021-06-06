import React from 'react';
import styled from 'styled-components';
import { device } from '../styles';

const StyledButton = styled.button`
    background: none;
    border: none;
    color: ${( props:any ) => props.theme.secondary};
    float: right;
    padding-right: 1rem;
    width: 7rem;
    margin-left: auto;
    margin-right: 0;

    @media ${device.tablet} {
        position: fixed;
        right: 2rem;
        top: 1rem;
    }
`;

// toggle 'light  || dark'
const ToggleText = styled.p`
    font-size: 1rem;
    padding: 0.2rem 0.4rem 0.3rem 0.4rem;
    font-family: "Shippori Mincho B1", sans-serif;
    font-weight: 900;
    cursor: pointer;
    letter-spacing: 0.1rem;
    background-color: ${( props:any ) => props.theme.primary};
    color: ${( props:any ) => props.theme.background};

    @media ${device.tablet} {
        background-color: ${( props:any ) => props.theme.background};
        color: ${( props:any ) => props.theme.primary};

        &:hover {
            color: ${( props:any ) => props.theme.background};
            background-color: ${( props:any ) => props.theme.tertiary};
        }
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