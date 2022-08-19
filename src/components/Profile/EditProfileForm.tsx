import React, { useState } from 'react';
import {
  FormInput, FormTextArea, ProfileForm, SaveProfilFormButton,
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
      <FormTextArea
        id="bio"
        onChange={(e) => handleFormData(e)}
        placeholder="Bio"
      />
      <FormInput
        id="localization"
        onChange={(e) => handleFormData(e)}
        placeholder="Localização"
        type="text"
      />
      <SaveProfilFormButton
        onClick={() => saveUserChanges(formData)}
        type="button"
      >
        Salvar

      </SaveProfilFormButton>
    </ProfileForm>
  );
}

export default EditProfileForm;
