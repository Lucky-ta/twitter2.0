import React from 'react';
import {
  EditOptionsContainer,
  ProfilePicture,
  ProfileWallPapper,
} from '.';

function ProfileInfo() {
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
      </EditOptionsContainer>
    </div>
  );
}
export default ProfileInfo;
