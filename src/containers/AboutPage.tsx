import styled from 'styled-components';
import { SideNav } from '../components/SideNav';
import { typography, containers } from '../styles';
import lightPhoto from '../trumpetPhoto.jpg';
import darkPhoto from '../garibaldiPhoto.jpg';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const AboutContainer = styled(containers.PageContainer)`
    width: 80%;
    margin: 0% 15% 0% 5%;
`;

const Column = styled.div`
    background-color: grey;
    min-width: 25%;
    float: left;
`;

const Row = styled.div`
    padding-bottom: 1rem;
`;

const Body = styled.div`
    padding-left: 27rem;
`;

const AboutHeading = styled(typography.Body)`
    color: ${({ theme }) => theme.base};
`;

export const AboutPage = () => {
    const themeContext = useContext(ThemeContext);
    const mode = themeContext.id === 'dark';

    const AboutImage = styled.div`
    background-image: url(${mode ? darkPhoto : lightPhoto});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 25rem;
    width: 25rem;
    float: left;
    `;

    return(
        <AboutContainer>
            <containers.ContentContainer>
                <Row>
                    <AboutImage />
                    <Body>
                        <AboutHeading>
                                Hey, here's a bit about myself. <br />
                        </AboutHeading>
                        <typography.SmallBody>
                        I care about the focus and flow programming adds to my life.
                        With the various disciplines I handle, I hope to create tools that inspire and contribute positivity to other lives.
                        <br /><br />
                        I am currently a college student at McGill University, focusing on a double major in Computer Science and Music Performance.
                        Before, I was in highschool, performing internationally with the award-winning Jazz Band at Semiahmoo Secondary in Surrey, BC.
                        Since then, I have been doing professional work as a musician in Vancouver and Montreal.
                        <br /><br />
                        My foray with code started with an introductory programming class in university; it's been history ever since.
                        I'm interested in Software Design, ML, Audio DSP, and overly enthuasiastic about music technology.
                        <br /><br />
                        I'd love to hear from you! 
                        <br /><br />
                        maxzhangvancouver@gmail.com
                        </typography.SmallBody>
                    </Body>
                </Row>
                
                <br />
                <containers.TopLarge>
                    <Column>
                        Education
                    </Column>
                    <Column>
                        Experience
                    </Column>
                    <Column>
                        Skills
                    </Column>
                    <Column>
                        Awards
                    </Column>
                </containers.TopLarge>


               
            </containers.ContentContainer>

            <SideNav/>
        </AboutContainer>
    )
}

/*

I care about the focus and flow programming adds to my life.
With the various disciplines I handle, I hope to create tools that inspire and contribute positivity to other lives.

I am currently a college student at McGill University, focusing on a double major in Computer Science and Music Performance.
Before, I was in highschool, performing internationally with the award-winning Jazz Band at Semiahmoo Secondary in Surrey, BC.
Since then, I have been doing professional work as a musician in Vancouver and Montreal.

My foray with code started with an introductory programming class in university; it's been history ever since.
I'm interested in Software Design, ML, Audio DSP, and overly enthuasiastic about music technology.

I'd love to hear from you! maxzhangvancouver@gmail.com

*/