import styled from "styled-components";

const Top1 = styled.div`
    padding-top: 1rem;
`;

const Top3 = styled.div`
    padding-top: 3rem;
`;

const SiteContainer = styled.div`
    width: 100wh;
    height: 100vh;
    background-color: ${({ theme }) => theme.background}; 
`;

const PageContainer = styled.div`
    width: 70%;
    height: 100vh;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 9rem;
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
