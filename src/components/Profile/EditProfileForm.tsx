import React, { useState } from 'react';
import {
  DeleteUserButton,
  FormInput, ProfileForm, SaveProfilFormButton,
} from './index';

export interface FormDataShape {
  profilePicture: string;
  profileWallPapper: string;
  name: string;
  bio: string;
  localization: string;
}

function EditProfileForm() {
  const [formData, setFormData] = useState<FormDataShape>();
  const handleFormData = ({ target }: any) => {
    setFormData({ ...formData, [target.id]: target.value });
  };

  const saveUserChanges = (userChanges: FormDataShape) => {
    console.log(userChanges);
  };

  return (
    <ProfileForm>
      <FormInput
        id="name"
        onChange={(e) => handleFormData(e)}
        placeholder="Nome"
        type="text"
      />
      <SaveProfilFormButton
        onClick={() => saveUserChanges(formData)}
        type="button"
      >
        Salvar

      </SaveProfilFormButton>
      <DeleteUserButton>Excluir conta</DeleteUserButton>
    </ProfileForm>
  );
}

export default EditProfileForm;
