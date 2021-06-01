import styled from 'styled-components'

const extraLargeText = '48px'
const largeText = '32px'
const mediumText = '20px'
const bodyText = '16px'
const smallText = '12px'

// large heading, e.g. 'Hello, I'm Max.'
const LargeHeading = styled.p`
    margin: 0rem;
    font-size: ${extraLargeText};
    padding-bottom: 1rem;
    font-family: "Shippori Mincho B1", sans-serif;
    font-weight: 900;
    word-wrap: normal;
    text-align: left;
    color: ${({ theme }) => theme.secondary};
`;

const Heading = styled.p`
    margin: 32px 0px 6px 0px;
    font-size: ${mediumText};
    padding-bottom: 6px;
    font-family: "Open Sans", sans-serif;
    font-weight: 350;
    word-wrap: normal;
    letter-spacing: 0.3rem;
    line-height: 14px;
    color: ${({ theme }) => theme.secondary};
`;

const Body = styled.p`
    font-size: ${bodyText};
    color: ${({ theme }) => theme.secondary};
`;

export const typography = {
    LargeHeading: LargeHeading,
    Heading: Heading,
    Body: Body,
};