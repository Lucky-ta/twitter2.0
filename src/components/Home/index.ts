import styled, { css } from 'styled-components';

export const MainPageHeader = styled.header`
    display: flex;
    width: 100vw;

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

export const HeaderFilterButton = styled.button`
    background: none;
    border: none;
    color: white;

    font-size: 2em;

    margin: auto;
    margin-right: 1em;
`;

interface UserProfilePictureProps {
    profileWidth?: string;
}

export const UserProfilePicture = styled.img<UserProfilePictureProps>`
    width: 3.4em;
    border-radius: 100em;

    ${({ profileWidth }) => profileWidth && css`
        width: 3em
    `}
`;

export const FooterContainer = styled.footer`
    background-color: black;
    display: flex;
    position: fixed;
    bottom: 0;

    width: 100vw;
    padding-top: 1em;
    padding-bottom: 0.4em;

    justify-content: space-around;
`;

export const FooterButtons = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 1.6em;
`;

export const MainContentContainer = styled.main`
    padding-top: 4em;

    width: 100vw;
    height: 100vh;
    background-color: aqua;
`;

export const CreateTweetButton = styled.button`
    background: none;
    border: none;
    color: white;

    border-radius: 100em;
    background-color: #00b9ff;

    font-size: 1.6em;
    padding: 0.5em 0.6em;

    position: absolute;
    right: 0.8em;
    bottom: 2.7em;

    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    &:hover{
        cursor: pointer;
    }
`;
