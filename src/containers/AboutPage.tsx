import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { typography, containers } from '../styles';
import { SideNav } from '../components/SideNav';
import lightPhoto from '../assets/trumpetPhoto.jpg';
import darkPhoto from '../assets/garibaldiPhoto.jpg';
import resume from '../assets/resume.pdf';

const linkedIn = 'https://www.linkedin.com/in/max-zhang-608444176/';
const gitHub = 'https://github.com/chetbae';
const instagram = 'https://www.instagram.com/mx.yz/';
const email = 'mailto: maxzhangvancouver@gmail.com';

const AboutContainer = styled(containers.PageContainer)`
    width: 80%;
    margin: 0% 15% 0% 5%;
`;

const Column = styled.div`
    width: 16%;
    padding-right: 9%;
    float: left;
    background-color: gree;
`;

const Row = styled.div`
    background-color: re;
`;

const Body = styled.div`
    padding-left: 50%;
`;

const AboutHeading = styled(typography.Body)`
    color: ${({ theme }) => theme.base};
    letter-spacing: 0rem;
`;

const AboutImage = styled.img`
    width: 45%;
    max-width: 25rem;
    height: auto;
    float: left;
`;

export const AboutPage = () => {
    const themeContext = useContext(ThemeContext);
    const isDark = themeContext.id === 'dark';

    return(
        <containers.SiteContainer>
        <AboutContainer>
            <containers.ContentContainer>
                <Row>
                    <AboutImage src={ isDark ? darkPhoto : lightPhoto}/>
                    <Body>
                        <AboutHeading>
                            Hey, here's a bit about myself. <br />
                        </AboutHeading>
                        <typography.SmallBody>
                        I care about the focus and flow programming adds to my life.
                        With the various disciplines I handle, I hope to create tools that inspire and contribute positivity to other lives.
                        <br /><br />
                        I am currently a student at McGill University with a focus in Computer Science and Music Performance.
                        Before, I was in highschool performing internationally with the award-winning Jazz Band at Semiahmoo Secondary in Surrey, BC.
                        <br /><br />
                        My foray with code started with an introductory programming class in university; it's been history ever since.
                        I'm interested in and studying Software Design, ML, Audio DSP, and overly enthuasiastic about music technology.
                        <br /><br />
                        I'd love to hear from you! maxzhangvancouver@gmail.com
                        </typography.SmallBody>
                    </Body>
                </Row>  
                <br/>
                <containers.TopLarge>
                    <Row>
                        <Column>
                            <AboutHeading>Education</AboutHeading>
                            <typography.SmallBody>
                                McGill University<br />
                                2018-2023<br /> 
                                <br />
                                Bachelor of Music<br />
                                Major in Music Performance<br />
                                Double Major in Computer Science<br />
                                <br />
                                Cumulative GPA 3.7 / 4.0<br />
                            </typography.SmallBody>
                        </Column>
                        <Column>
                            <AboutHeading>Experience</AboutHeading>
                            <typography.SmallBody>
                                McGill University<br />
                                Orchestra Assistant<br />
                                September 2019 - May 2020<br />
                                Montréal, QC<br />
                                <br />
                                South Delta Jazz Festival<br />
                                Music TA<br />
                                Summer 2019<br />
                                Delta, BC<br />
                                <br />
                                VSO School of Music<br />
                                Music TA<br />
                                Summer 2018<br />
                                Vancouver, BC<br />
                                <br />
                                Freelance Musician<br />
                                Studio / Gig / Lessons<br />
                                2017 - present<br />


                            </typography.SmallBody>
                        </Column>
                        <Column>
                            <AboutHeading>Skills</AboutHeading>
                            <typography.SmallBody>
                                Software Design <br />
                                Algorithms & Data Structures <br />
                                Frontend Development<br />
                                Basic Applied ML<br />
                                <br />
                                Java<br />
                                Python<br />
                                HTML, CSS<br />
                                Javascript, Typescript<br />
                                ReactJS<br />
                                NodeJS<br />
                                Git, GitHub, GitLab<br />
                                <br />
                                Music Performance<br />
                                Music Composition<br />
                                Music Production<br />
                                Teaching<br />
                            </typography.SmallBody>
                        </Column>
                        <Column>
                        <   AboutHeading>Awards</AboutHeading>
                            <typography.SmallBody>
                            Lallemand Award in Music<br />
                            Fall 2020<br />
                            <br />

                            University Scholarships:<br />
                            &nbsp;- McGill 4,000<br />
                            &nbsp;- UofT 6,000<br />
                            &nbsp;- The New School 16,000<br />
                            &nbsp;- Berklee 31,000<br />
                            Fall 2018<br />
                            <br />

                            BC Arts Council Scholarship<br />
                            Summer 2018<br />
                            <br />
                            
                            Dal Richards Scholarship<br />
                            Summer 2018<br />
                            <br />

                            Lionel Hampton Jazz Festival Top Soloist<br />
                            2017 - 2018<br />
                            <br />

                            Surrey Jazz Festival Awards<br />
                            2014 - 2018<br />
                            <br />
                            </typography.SmallBody>
                        </Column>
                        &nbsp;
                    </Row>
                </containers.TopLarge>

                <br/>
                <containers.TopMedium>
                    <typography.LinkBody href={email} target='_blank' >
                        email
                    </typography.LinkBody>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <typography.LinkBody href={gitHub} target='_blank' >
                        GitHub
                    </typography.LinkBody>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <typography.LinkBody href={instagram} target='_blank' >
                        Instagram
                    </typography.LinkBody>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <typography.LinkBody href={linkedIn} target='_blank' >
                        LinkedIn
                    </typography.LinkBody>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <typography.LinkBody href={resume} target='_blank' >
                        CV
                    </typography.LinkBody>
                </containers.TopMedium>
                <br /><br /><br /><br />
            </containers.ContentContainer>
            <SideNav/>
        </AboutContainer>
        </containers.SiteContainer>
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