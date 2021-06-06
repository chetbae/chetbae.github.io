import styled from 'styled-components';
import { device } from '../styles/device';

const TopSmall = styled.div`
    padding-top: 1rem;
`;

const TopMedium = styled.div`
    padding-top: 2.6rem;
`;

const TopLarge = styled.div`
    padding-top: 5rem;

    @media ${device.tablet} {
        padding-top: 13rem;
    }
`;

// whole background
const SiteContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${( props ) => props.theme.background}; 
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
    }
`;

// content + sidenav 
const PageContainer = styled.div`
    margin: 0% 5%;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
        padding-top: 7rem;
        width: 70%;
        margin: 0% 15%;
        flex-direction: row;
    }
`;

// page content, left majority
const ContentContainer = styled.div`
    padding-top: 2rem;
    background-color: gree;

    @media ${device.tablet} {
        padding-top: 0;
        width: 85%;
    }
`;

const ImageContainer = styled.div`
`;

export const containers = {
    TopSmall: TopSmall,
    TopMedium: TopMedium,
    TopLarge: TopLarge,
    SiteContainer: SiteContainer,
    PageContainer: PageContainer,
    ContentContainer: ContentContainer,
    ImageContainer: ImageContainer,
    // Overlap: Overlap,
};
