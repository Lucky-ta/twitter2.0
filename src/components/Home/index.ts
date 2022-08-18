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

export const HeaderSpacing = styled.div`
    padding-top: 3.1em;
`;

export const FooterSpacing = styled.div`
    padding-top: 3.1em;
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
    tweetProfilePicture?: boolean;
}

export const UserProfilePicture = styled.img<UserProfilePictureProps>`
    width: 3.4em;
    border-radius: 100em;


    ${({ tweetProfilePicture }) => tweetProfilePicture && css`
        width: 2.9em
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
    width: 100%;
    padding-left: 0.6em;
    padding-right: 0.6em;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: rgba(128,128,128, 0.3);

    background-color: black;
`;

export const CreateTweetButton = styled.button`
    background: none;
    border: none;
    color: white;

    border-radius: 100em;
    background-color: #00b9ff;

    font-size: 1.6em;
    padding: 0.5em 0.6em;

    position: fixed;
    right: 0.8em;
    bottom: 2.7em;

    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    &:hover{
        cursor: pointer;
    }
`;

export const MainContentHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 0.8em;
    gap: 1em;
    padding-bottom: 1.2em;
    padding-top: 1.2em;
`;

export const MainContentFilterButton = styled.button`
    background: none;
    border: none;
    color: grey;
    font-size: 1.6em;

    margin: auto;
    margin-right: 0em;
`;

export const MainContentButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
`;

export const MainContentButtons = styled.button`
    background: none;
    border: none;
    color: grey;
    font-size: 1.2em;
`;
