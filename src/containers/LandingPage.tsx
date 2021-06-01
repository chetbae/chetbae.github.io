import { typography, containers } from '../styles';
import styled from 'styled-components';

const LandingContainer = styled.div`

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
        color: ${({ theme }) => theme.secondary};
        font-size: 0.8rem;
    }
`;


export const LandingPage = () => {
    return(
        <containers.PageContainer>
            <containers.ContentContainer>

                <LandingContainer>

                    <typography.LargeHeading>
                        Hello,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        I'm Max.
                    </typography.LargeHeading>

                    <containers.Top3>
                        <BodyContainer>
                            <typography.Heading>
                                currently i'm...
                            </typography.Heading>

                            <ListContainer>
                                <ListItem>
                                    <typography.Body>studying machine learning at MIT Open Learning Library</typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>seeking internships for Fall 2021</typography.Body>
                                </ListItem>
                            </ListContainer>

                        </BodyContainer>
                    </containers.Top3>
                    <containers.Top1>
                        <BodyContainer>
                            <typography.Heading>
                                before, i was...
                            </typography.Heading>

                            <ListContainer>
                                <ListItem>
                                    <typography.Body>third year @ mcgill: software design, advanced algorithms, linear algebra, etc...</typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>making productivity apps for students at McHacks, CodeJam, HacktheNorth++</typography.Body>
                                </ListItem>
                                <ListItem>
                                    <typography.Body>performing Jazz music in and around Montréal & Vancouver</typography.Body>
                                </ListItem>
                            </ListContainer>
                            
                        </BodyContainer>
                    </containers.Top1>
                </LandingContainer>
            
            </containers.ContentContainer>
        </containers.PageContainer>
    )
}