import styled from 'styled-components';

export const ErrorPageParagraph = styled.p`
    font-size: 1.6em;
    width: 15em;
    margin: auto;
    padding-top: 1em;
`;

export const ErrorPageWarning = styled.span`
    color: red;
    font-size: 2em;
    font-weight: 700;

    display: table;
    margin: 0 auto;
    padding-top: 2em;
`;

export const ErrorPageSpan = styled.span`
    color: red;
    font-size: 2em;
    font-weight: 700;

    display: table;
    margin: 0 auto;
    padding-top: 2em;

    &&:hover {
        color: green;
        cursor: pointer;
    }
`;
