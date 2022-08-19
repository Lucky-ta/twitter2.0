import React from 'react';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import {
  ContactButton,
  EditOptionsContainer,
  EditProfileButton,
  ProfileCategories,
  ProfileCategoriesOptions,
  ProfileContactContainer,
  ProfilePicture,
  ProfileUserName,
  ProfileWallPapper,
} from '.';

function ProfileInfo() {
  const redirectContact = (contactLink: string) => {
    window.location.href = contactLink;
  };
  return (
    <div>
      <ProfileWallPapper
        src="https://i.pinimg.com/originals/2c/84/0e/2c840e86d494c5e809f850b00a69ad29.jpg"
        alt="Capa de fundo"
      />
      <EditOptionsContainer>
        <ProfilePicture
          src="https://i.pinimg.com/originals/2c/84/0e/2c840e86d494c5e809f850b00a69ad29.jpg"
          alt="profile pic"
        />
        <EditProfileButton type="button">Editar perfil</EditProfileButton>
        <ProfileUserName>User Name</ProfileUserName>
      </EditOptionsContainer>
      <ProfileContactContainer>
        <ContactButton
          id="https://www.linkedin.com/in/lucasmaieski/"
          onClick={({ target }: any) => redirectContact(target.id)}
        >
          <AiOutlineLinkedin />
          Linkedin
        </ContactButton>
        <ContactButton
          id="https://github.com/Lucky-ta"
          onClick={({ target }: any) => redirectContact(target.id)}
        >
          <AiFillGithub />
          GitHub
        </ContactButton>
        <ContactButton
          id="https://lucasmaieski.vercel.app/"
          onClick={({ target }: any) => redirectContact(target.id)}
        >
          <CgProfile />
          Portfolio
        </ContactButton>
      </ProfileContactContainer>
      <ProfileCategories>
        <ProfileCategoriesOptions>Tweets</ProfileCategoriesOptions>
        <p>Tweets e respostas</p>
        <p>Mídia</p>
        <p>Curtidas</p>
      </ProfileCategories>
    </div>
  );
}
export default ProfileInfo;
