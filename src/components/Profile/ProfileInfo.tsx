import React from 'react';
import { EditOptionsContainer, EditProfileButton, ProfileCategories, ProfileCategoriesOptions, ProfileContactContainer, ProfileInfoContainer, ProfilePicture, ProfileUserName, ProfileWallPapper } from '.';

function ProfileInfo() {
  return (
    <div>
      <ProfileWallPapper src="https://i.pinimg.com/originals/2c/84/0e/2c840e86d494c5e809f850b00a69ad29.jpg" alt="Capa de fundo" />
      <EditOptionsContainer>
        <ProfilePicture src="https://i.pinimg.com/originals/2c/84/0e/2c840e86d494c5e809f850b00a69ad29.jpg" alt="profile pic" />
        <EditProfileButton type="button">Editar perfil</EditProfileButton>
        <ProfileUserName>User Name</ProfileUserName>
      </EditOptionsContainer>
      <ProfileContactContainer>
        <span>Linkedin</span>
        <span>GitHub</span>
        <span>Portfolio</span>
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
