import styled from 'styled-components';
import { SideNav } from '../components/SideNav';
import { typography, containers } from '../styles';
import lightPhoto from '../trumpetPhoto.jpg';
import darkPhoto from '../garibaldiPhoto.jpg';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Column = styled.div`
    background-color: grey;
    min-width: 25%;
    float: left;
`;

export const AboutPage = () => {
    const themeContext = useContext(ThemeContext);
    const mode = themeContext.id === 'dark';

    const AboutImage = styled.div`
    background-image: url(${mode ? darkPhoto : lightPhoto});
    background-repeat: no-repeat;
    background-size: 22rem 22rem;
    height: 22rem;
    width: 22rem;
    `;

    return(
        <containers.PageContainer>
            <containers.ContentContainer>
                <AboutImage />
                

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
        </containers.PageContainer>
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