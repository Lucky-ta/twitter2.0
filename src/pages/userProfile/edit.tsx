import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useState } from 'react';
import { DeleteButton, NameTitle, SaveChangesButton } from '../../components/EditProfile';
import { HeaderSpacing } from '../../components/Home';
import Header from '../../components/Home/Header';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import { SignUpComponentForm, SignUpComponentInput } from '../../components/SignUp';
import getAuthUser from '../../services/auth';
import { editUserName, deleteUser, getUserById } from '../../services/userApi';
import EditProfileBodyContainer from '../../styles';
import { redirectToSignUpPage } from '../../utils/redirectFunctions';
import { UserDataShape } from '../userProfile';

type EditProfilePropsShape = {
  userData: UserDataShape;
};

function EditProfile({ userData }: EditProfilePropsShape) {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  const handleSaveFormButton = async () => {
    const result = await editUserName(
      userData.userId,
      userData.USER_TOKEN,
      userName,
    );
    console.log(result);
  };

  const handleDeleteAccountButton = async () => {
    const result = await deleteUser(userData.userId, userData.USER_TOKEN);
    if (result.message) {
      console.log(result);
      return window.alert('Não foi possível excluir');
    } return redirectToSignUpPage(router);
  };

  return (
    <EditProfileBodyContainer>
      <Header title="Editar perfil" />
      <HeaderSpacing />
      <ProfileInfo />
      <NameTitle>{userData.userName}</NameTitle>
      <SignUpComponentForm>
        <SignUpComponentInput
          onChange={({ target }) => setUserName(target.value)}
          type="text"
          placeholder="Nome"
        />
        <SaveChangesButton onClick={handleSaveFormButton} type="button">
          Salvar
        </SaveChangesButton>
      </SignUpComponentForm>
      <DeleteButton onClick={handleDeleteAccountButton} type="button">
        Excluir conta
      </DeleteButton>
    </EditProfileBodyContainer>
  );
}

export async function getServerSideProps(context) {
  const cookies: any = parseCookies(context);
  const userData = getAuthUser(cookies.userToken);

  const currentUserData = await getUserById(userData.id);

  return {
    props: {
      userData: {
        USER_TOKEN: cookies.userToken,
        userId: userData.id,
        userName: currentUserData.name,
      },
    },
  };
}

export default EditProfile;
