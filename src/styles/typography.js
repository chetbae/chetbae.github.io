import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const extraLargeText = '3rem'
const largeText = '2rem'
const mediumText = '1rem'
const bodyText = '0.9rem'
const smallText = '0.75rem'

// large heading, e.g. 'Hello,'
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

// large heading, e.g. 'I'm Max'
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

// 'right now...', 'before, i was...'
const Heading = styled.p`
    margin: 1rem 0rem 1.4rem 0rem;
    font-size: ${smallText};
    padding-bottom: 0.1rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    word-wrap: normal;
    letter-spacing: 0.6rem;
    line-height: 14px;
    color: ${({ theme }) => theme.primary};
`;

// list items, ...
const Body = styled.p`
    font-size: ${bodyText};
    font-family: "Open Sans", sans-serif;
    font-weight: 450;
    letter-spacing: 0.11rem;
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
        color: ${({ theme }) => theme.quaternary};
    }
    &.${activeClassName} {
        color: ${({ theme }) => theme.tertiary};
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

const LinkBody = styled.a`
    font-size: ${bodyText};
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    word-wrap: normal;
    color: ${({ theme }) => theme.primary};
    border-bottom: 0.2rem solid ${({ theme }) => theme.tertiary};
    cursor: pointer;
    text-decoration: none;
    letter-spacing: 0.12rem;
    &:hover {
        border-bottom: 0.2rem solid ${({ theme }) => theme.quaternary};
    }
`;

export const typography = {
    LargeHeading: LargeHeading,
    LargeHeading1: LargeHeading1,
    Heading: Heading,
    Body: Body,
    LinkHeading: LinkHeading,
    LinkHeadingFancy: LinkHeadingFancy,
    LinkBody: LinkBody,
};