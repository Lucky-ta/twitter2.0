import styled from 'styled-components';

export const GlobalPageContainer = styled.div`
    background-color: black;
    color: white;

    display: block;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;

    @media(min-width: 500px) {
        display: flex;
        flex-direction: row-reverse;
  }
`;

export const SignUpForm = styled.div``;
