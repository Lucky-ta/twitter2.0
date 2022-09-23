import React from 'react';
import { HeaderSpacing } from '../../components/Home';
import Header from '../../components/Home/Header';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import { GlobalPageContainer } from '../../styles/globalContainer';

function EditProfile() {
  return (
    <GlobalPageContainer>
      <Header title="Editar perfil" />
      <HeaderSpacing />
      <ProfileInfo />
      <form>
        <input type="text" placeholder="Nome" />
        <button type="button">Salvar</button>
      </form>
      <button type="button">Excluir conta</button>
    </GlobalPageContainer>
  );
}

export default EditProfile;
