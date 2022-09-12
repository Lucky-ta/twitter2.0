import styled, { css } from 'styled-components';

export const ProfileHeaderContainer = styled.div`
    display: flex;
    width: 100vw;

    font-size: 0.8em;
    align-items: center;
    
    padding-left: 1.6em;
    padding-top: 1em;
    padding-bottom: 1em;
    gap: 3em;

    border-bottom: 0 solid black;

    position: fixed;
    background-color: rgba(0, 0, 0, 0.61);
    backdrop-filter: blur(5px);

    z-index: 9999;

`;

export const ProfileContainer = styled.div`
    background-color: black;
    color: white;

    display: block;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;

    @media(min-width: 500px) {
        padding-left: 6em;
  }
`;

export const ProfileWallPapper = styled.img`
    width: 100%;
    height: 8em;
    object-fit: cover;

    border: 1px solid black;
`;

export const ProfilePicture = styled.img`
    width: 5.8em;
    height: 5.8em;
    object-fit: cover;
    border-radius: 999em;
    border: 1px solid black;
    position: relative;
    left: 1em;

    transform: translate(0em, -3.1em);

    &&:hover {
        cursor: pointer;
    }
`;

export const EditProfileButton = styled.button`
    background: none;
    background-color: black;
    border: none;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.40);

    font-size: 1em;
    font-weight: 600;
    padding-left: 0.9em;
    padding-right: 0.9em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-radius: 99em;

    max-height: 3em;
    position: absolute;
    top: 12em;
    right: 1em;

    &&:hover {
        cursor: pointer;
    }
`;

export const EditOptionsContainer = styled.div`
    width: 100%;
`;

export const ProfileUserName = styled.h3`
    padding-left: 1em;
    transform: translate(2px, -26px);
`;

export const ProfileCategories = styled.div`
    width: 100%;
    display: flex;

    padding-top: 2em;
    justify-content: space-around;
    font-weight: 600;
`;

interface ProfileCategoriesOptionsPropsShape {
    mainCategory?: boolean;
}

export const ProfileCategoriesOptions = styled.button<ProfileCategoriesOptionsPropsShape>`
    border: none;
    background: none;
    color: white;
    font-size: 1em;
    font-weight: 700;
    cursor: pointer;

    ${({ mainCategory }) => mainCategory && css`
        border-bottom: 4px solid rgb(29, 155, 240);
        height: 2.4em;
    `}

    &&:focus {
        border-bottom: 4px solid rgb(29, 155, 240);
        height: 2.4em;
}

`;

export const ProfileContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0.8em;
    padding-top: 1em;
    gap: 0.4em;
`;

export const ContactButton = styled.button`
    background: none;
    border: none;
    color: white;
    display: flex;
    gap: 1em;
    font-size: 0.9em;

    &&:hover {
        color:rgb(29, 155, 240) ;
        cursor: pointer;
    }
`;
