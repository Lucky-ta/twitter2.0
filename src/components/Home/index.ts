import styled from 'styled-components';

export const MainPageHeader = styled.header`
    display: flex;

    font-size: 0.6em;
    align-items: center;
    
    padding-left: 1.6em;
    padding-top: 1em;
    padding-bottom: 1em;

    border-bottom: 0 solid black;

    position: fixed;
    background-color: rgba(0, 0, 0, 0.61);
    backdrop-filter: blur(5px);
`;

export const HeaderTitle = styled.h1`
    padding-left: 1.4em;
`;

export const UserProfilePicture = styled.img`
    width: 10%;
    border-radius: 100em;
`;

export const HeaderFilterButton = styled.button`
    background: none;
    border: none;
    color: white;

    font-size: 2em;

    margin: auto;
    margin-right: 1em;
`;
