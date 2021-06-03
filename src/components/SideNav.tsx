import styled from 'styled-components';
import { typography } from '../styles';

const LinkContainer = styled.nav`
    position: fixed;
    right: 15%;
    width: 20%;
    line-height: 2rem;
    text-align: right;
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