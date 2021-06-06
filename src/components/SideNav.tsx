import styled from 'styled-components';
import { typography, device } from '../styles';

const LinkContainer = styled.nav`
    background-color: ${( props:any ) => props.theme.background};
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    padding: 1.2rem 0 0.8rem 0;
    
    @media ${device.tablet} {
        background-color: transparent;
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 7rem;
        right: 15%;
        width: 20%;
        line-height: 1rem;
    }
`;

export const SideNav = () => {
    return(
        <LinkContainer>

            <typography.LinkHeading
                exact to='/' >
                HELLO
            </typography.LinkHeading><br/>
            <typography.LinkHeading
                exact to='/kurzgesagt' >
                ABOUT
            </typography.LinkHeading><br/>
            <typography.LinkHeading 
                exact to='/projects' >
                PROJECTS
            </typography.LinkHeading><br/>
            <typography.LinkHeading 
                exact to='/muusika' >
                MUSIC
            </typography.LinkHeading><br/>
    
        </LinkContainer>
    );
};