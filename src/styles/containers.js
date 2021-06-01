import styled from 'styled-components';

const Top1 = styled.div`
    padding-top: 1rem;
`;

const Top3 = styled.div`
    padding-top: 2.6rem;
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
    padding-top: 9rem;
    display: flex;
    flex-direction: row;
    margin: 0% 15%;
    background-color: re;
`;

// page content, left majority
const ContentContainer = styled.div`
    width: 80%;
    flex-direction: row;
    background-color: gree;
`;

const Overlap = styled.div`
    position: absolute;
    z-index: -10;
`;

export const containers = {
    PageContainer: PageContainer,
    ContentContainer: ContentContainer,
    Top1: Top1,
    Top3: Top3,
    Overlap: Overlap,
    SiteContainer: SiteContainer,
};
