import styled from 'styled-components';

const TopSmall = styled.div`
    padding-top: 1rem;
`;

const TopMedium = styled.div`
    padding-top: 2.6rem;
`;

const TopLarge = styled.div`
    padding-top: 10rem;
    float: none;
`;

// in App.tsx
const SiteContainer = styled.div`
    width: 100wh;
    height: 100vh;
    background-color: ${({ theme }) => theme.background}; 
    justify-content: center;
`;

// content + sidenav
const PageContainer = styled.div`
    width: 70%;
    padding-top: 7rem;
    display: flex;
    flex-direction: row;
    margin: 0% 15%;
    background-color: re;
`;

// page content, left majority
const ContentContainer = styled.div`
    width: 85%;
    background-color: gree;
`;

const ImageContainer = styled.div`
`;

// const Overlap = styled.div`
//     position: absolute;
//     z-index: -10;
// `;

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
