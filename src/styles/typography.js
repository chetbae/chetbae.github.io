import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const extraLargeText = '48px'
const largeText = '32px'
const mediumText = '16px'
const bodyText = '14px'
const smallText = '10px'

// large heading, e.g. 'Hello, I'm Max.'
const LargeHeading = styled.p`
    margin: 0rem;
    font-size: ${extraLargeText};
    padding-bottom: 1rem;
    font-family: "Shippori Mincho B1", sans-serif;
    font-weight: 900;
    word-wrap: normal;
    text-align: left;
    color: ${({ theme }) => theme.primary};
`;

const LargeHeading1 = styled.p`
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
    margin: 1rem 0rem 1.4rem 0rem;
    font-size: ${mediumText};
    padding-bottom: 6px;
    font-family: "Open Sans", sans-serif;
    font-weight: 350;
    word-wrap: normal;
    letter-spacing: 0.3rem;
    line-height: 14px;
    color: ${({ theme }) => theme.primary};
`;

const Body = styled.p`
    font-size: ${bodyText};
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
`;

const BodyFancy = styled.p`
    margin: 1rem 0rem 1rem 0rem;
    font-size: ${bodyText};
    padding-bottom: 0.4rem;
    font-family: "Shippori Mincho B1", sans-serif;
    font-weight: 900;
    word-wrap: normal;
    letter-spacing: 0.1rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.primary};
`;
const activeClassName = 'nav-item-active'

const LinkHeading = styled(NavLink).attrs({ activeClassName })`
    font-size: ${mediumText};
    font-family: "Open Sans", sans-serif;
    color: ${({ theme }) => theme.secondary};
    text-align: right;
    letter-spacing: 0.1rem;
    cursor: pointer;
    text-decoration: none;
    line-height: 1rem;
    font-weight: 700;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    &.${activeClassName} {
        color: ${({ theme }) => theme.primary};
      }
`;

const LinkHeadingFancy = styled(NavLink).attrs({ activeClassName })`
    font-size: ${largeText};
    font-family: "Shippori Mincho B1", sans-serif;
    color: ${({ theme }) => theme.secondary};
    text-align: right;
    letter-spacing: 1rem;
    cursor: pointer;
    text-decoration: none;
    line-height: 1rem;
    font-weight: 900;
    &:hover {
        color: ${({ theme }) => theme.tertiary};
    }
    &.${activeClassName} {
        color: ${({ theme }) => theme.tertiary};
      }
`;

export const typography = {
    LargeHeading: LargeHeading,
    LargeHeading1: LargeHeading1,
    Heading: Heading,
    BodyFancy: BodyFancy,
    Body: Body,
    LinkHeading: LinkHeading,
    LinkHeadingFancy: LinkHeadingFancy,
};