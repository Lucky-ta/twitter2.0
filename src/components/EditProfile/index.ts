import styled from 'styled-components';

export const SaveChangesButton = styled.button`
    color: black;
    font-weight: 600;

    max-width: 6em;
    border: none;
    border-radius: 2em;
    padding: 0.6em;
    padding-left: 1em;
    padding-right: 1em;

    position: absolute;
    top: 0.6em;
    right: 1em;
`;

export const DeleteButton = styled.button`
    color: black;
    font-weight: 600;
    background-color: rgb(244, 33, 46);
    max-width: 10em;
    border: none;
    border-radius: 2em;
    padding: 0.6em;
    padding-left: 1em;
    padding-right: 1em;

    position: absolute;
    bottom: 2em;
    right: 2em;

    cursor: pointer;
    &&:hover{
        color: white;
    }

`;

export const NameTitle = styled.h1`
    margin-left: 1em;
`;
