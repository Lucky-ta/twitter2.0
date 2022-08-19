import React from 'react';
import { HeaderSpacing } from '../../components/Home';
import EditProfileForm from '../../components/Profile/EditProfileForm';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import { GlobalPageContainer } from '../../styles/globalContainer';

function ProfileSettings() {
  return (
    <GlobalPageContainer>
      <ProfileHeader title="Editar perfil" />
      <HeaderSpacing />
      <ProfileInfo />
      <EditProfileForm />
    </GlobalPageContainer>
  );
}

export default ProfileSettings;
