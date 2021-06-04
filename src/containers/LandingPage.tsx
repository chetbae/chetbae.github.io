import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { typography, containers } from '../styles';
import { SideNav } from '../components/SideNav';

const LandingContainer = styled.div`
    transition: all 0.5s ease;
`;

const BodyContainer = styled.div`
    margin-left: 1.4rem;
`;

const ListContainer = styled.ul`
    margin-left: 2.5rem;
`;

const ListItem = styled.li`

    &::marker{
        content: '●     ';
        color: ${({ theme }) => theme.primary};
        font-size: 0.8rem;
    }
`;

export const LandingPage = () => {
    const themeContext = useContext(ThemeContext);
    const isDark = themeContext.id === 'dark';

    return(
        <containers.SiteContainer>
        <containers.PageContainer>
            <containers.ContentContainer>

                <LandingContainer>
                    <typography.LargeHeading>
                        { isDark ? 'Howdy!' : 'Hello,' }<br />
                    </typography.LargeHeading>
                    <typography.LargeHeading1>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        I'm Max{ isDark ? ' 🤠' : '' }.
                    </typography.LargeHeading1>

                    <BodyContainer>
                        <containers.TopMedium>
                            <typography.Heading>
                                right now ...
                            </typography.Heading>

                            <ListContainer>
                                <ListItem>
                                    <typography.Body>studying machine learning at&nbsp;
                                        <typography.LinkBody 
                                            href="https://openlearning.mit.edu/courses-programs/open-learning-library" 
                                            target='_blank' >
                                            MIT Open Learning Library
                                        </typography.LinkBody>
                                    </typography.Body>
                                </ListItem>
                                {/* <ListItem>
                                    <typography.Body>seeking internships for Fall 2021</typography.Body>
                                </ListItem> */}
                            </ListContainer>
                        </containers.TopMedium>

                        <containers.TopSmall>
                            <typography.Heading>
                                before, i was...
                            </typography.Heading>

                            <ListContainer>
                                <ListItem>
                                    <typography.Body>
                                        3<sup>rd</sup> year at McGill: algorithm design,&nbsp;
                                        <typography.LinkBody 
                                            href="https://github.com/chetbae/interactive-menu-display" 
                                            target='_blank' >
                                            software design
                                        </typography.LinkBody>
                                       , etc.
                                    </typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>
                                        making&nbsp;
                                        <typography.LinkBody 
                                            href="https://github.com/chetbae" 
                                            target='_blank'>
                                            productivity apps
                                        </typography.LinkBody>
                                        &nbsp;for students at McHacks, HacktheNorth++ ...
                                    </typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>
                                        performing&nbsp; 
                                        <typography.LinkBody 
                                            href="https://musicmaxzhang.wixsite.com/maxzhangmusic" 
                                            target='_blank' >
                                            JAZZ🎺
                                        </typography.LinkBody> 
                                        &nbsp;music in and around Montréal & Vancouver
                                    </typography.Body>
                                </ListItem>
                            </ListContainer>
                        </containers.TopSmall>
                    </BodyContainer>

                </LandingContainer>
            
            </containers.ContentContainer>
            <SideNav />
        </containers.PageContainer>
        </containers.SiteContainer>
    )
}