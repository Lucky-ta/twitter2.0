import styled from 'styled-components';

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
    position: absolute;
    left: 0.6em;
    top: 13em;
`;

export const ProfileCategories = styled.div`
    width: 100%;
    display: flex;

    padding-top: 2em;
    justify-content: space-around;
    font-weight: 600;
`;

export const ProfileCategoriesOptions = styled.p`
    border-bottom: 4px solid rgb(29, 155, 240);
    height: 2.4em;

    &&:hover {
        cursor: pointer;
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

export const ProfileForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;

    padding-left: 1.6em;
    padding-right: 1.6em;

    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
    input[data-autocompleted] {
        background-color: transparent !important;
    }
`;

export const FormInput = styled.input`
    background: none;
    border: none;

    border: 1px solid rgb(255, 255, 255, 0.34);
    border-radius: 4px;
    color: grey;
    height: 5em;

    padding-left: 1em;
    padding-bottom: 1.6em;

    &&:focus {
        outline: none !important;
        border:2px solid #1D9BF0;
    }
`;

export const FormTextArea = styled.textarea`
    background: none;
    border: none;

    border: 1px solid rgb(255, 255, 255, 0.34);
    border-radius: 4px;
    color: grey;
    height: 8em;

    padding-left: 1em;
    padding-top: 1em;
    &&:focus {
        outline: none !important;
        border:2px solid #1D9BF0;
    }
`;

export const SaveProfilFormButton = styled.button`
    background: none;
    border: none;

    background-color: rgb(239, 243, 244);;
    color: black;

    font-size: 1.4em;
    font-weight: 600;
    border-radius: 99em;
    padding-left: 0.8em;
    padding-right: 0.8em;
    padding-top: 0.4em;
    padding-bottom: 0.4em;

    margin: auto;
    margin-right: 0.4em;
    &&:hover {
        cursor: pointer;
    }
`;
