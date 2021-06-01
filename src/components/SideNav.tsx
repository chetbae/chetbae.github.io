import styled from 'styled-components';
import { typography } from '../styles';

const LinkContainer = styled.nav`
    width: 20%;
    line-height: 2rem;
    text-align: right;

    background-color: gre;
`;

export const SideNav = () => {
    return(
        <LinkContainer>

            <typography.LinkHeading
                exact to="/" >
                HELLO
            </typography.LinkHeading><br/>
            <typography.LinkHeading
                exact to="/about" >
                ABOUT
            </typography.LinkHeading><br/>
            <typography.LinkHeading 
                exact to="/projects" >
                PROJECTS
            </typography.LinkHeading><br/>
            <typography.LinkHeading 
                exact to="/music" >
                MUSIC
            </typography.LinkHeading><br/>
    
        </LinkContainer>
    );
};