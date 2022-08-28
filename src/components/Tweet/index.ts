import styled from 'styled-components';

export const TweetCardPageContainer = styled.div`
    background-color: black;
    color: white;
    display: block;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;
`;

export const LeftArrowButton = styled.div`
    font-size: 1.6em;

    &&:hover {
        cursor: pointer;
    }
`;

export const TweetPageContainer = styled.main`
    padding-top: 0.6em;
    padding-left: 0.8em;
    padding-right: 0.8em;
    
    padding-bottom: 1em;

`;

export const TweetButton = styled.button`
    background: none;
    border: none;
    background-color: #00b9ff;

    color: white;
    font-weight: 600;
    font-size: 0.8em;
    border-radius: 9999em;
    padding: 1.6em;
    padding-bottom: 0.7em;
    padding-top: 0.7em;
    text-align: center;
    margin-top: 0.6em;
    margin-right: 0.8em;

    position: absolute;
    right: 0;

    @media(max-width: 500px) {
        top: 0;
  }
`;

export const TweetContainer = styled.div`
    padding-top: 1em;
    display: grid;
    width: 100%;

    grid-template-columns: 4em 1fr;
`;

export const TweetTextArea = styled.textarea`
    width: 100%;
    max-height: 6em;
    background: none;
    border: none;
    word-spacing: 0%;
    resize: none;

    margin-top: 1em;
    font-size: 1.2em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: left;

    white-space: pre-wrap;
    position: relative;
    color: white;
`;

export const TweetButtonsContainer = styled.div`
    display: flex;
    gap: 1em;

    border-top: 1px solid;
    border-color: rgba(128,128,128, 0.3);
    margin-right: 1.6em;
    padding-top: 1.6em;
`;

export const TweetButtons = styled.button`
    background: none;
    border: none;

    color: rgb(29, 155, 240);
    font-size: 1.2em;
`;

export const TweetVisiblityOptionContainer = styled.div`
    display: flex;
    color: rgb(29, 155, 240);
    gap: 0.4em;
    font-weight: 600;
    font-size: 0.9em;
    text-align: center;

    margin-bottom: 1em;
`;
