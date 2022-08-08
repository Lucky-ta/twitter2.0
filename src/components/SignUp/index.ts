import styled, { css } from 'styled-components';

export const SignUpPageHeader = styled.header`
    width: 100vw;
    text-align: center;
    color: grey;
`;

export const SignUpPageForm = styled.main`
    width: 100vw;
    margin-top: 8em;
`;

export const SignUpComponentContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 2em;
    padding-right: 2em;
`;

export const SignUpComponentTitle = styled.h1`
    font-size: 1.6em;
`;

export const SignUpComponentForm = styled.form`
    display: flex;
    flex-direction: column;

    gap: 1em;
    margin-top: 2em;
    margin-bottom: 2em;

    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
    input[data-autocompleted] {
        background-color: transparent !important;
    }
`;

export const SignUpComponentInput = styled.input`
    height: 4em;
    width: 100%;

    background: none;
    border: none;

    border: 1px solid grey;
    border-radius: 4px;
    color: grey;
    padding-left: 1.6em;
`;

interface ButtonProps {
    isTransparent?: boolean;
}

export const SignUpComponentButton = styled.button<ButtonProps>`
    width: 100%;
    height: 2.8em;
    border: none;
    border-radius: 4em;

    font-size: 0.9em;
    font-weight: 700;

    ${({ isTransparent }) => isTransparent && css`
        color: white;
        border: 1px solid white;
        background-color: transparent;
    `}
`;

export const SignUpComponentLinkContainer = styled.div`
    color: grey;
    display: flex;
    gap: 0.4em;
`;

export const SignUpComponentLink = styled.button`
    color: #1D9BF0;
    border: none;
    background: none;
`;
