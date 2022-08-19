import React from 'react';
import { FormInput, FormTextArea, ProfileForm } from './index';

function EditProfileForm() {
  return (
    <ProfileForm>
      <FormInput placeholder="Nome" type="text" />
      <FormTextArea placeholder="Bio" />
      <FormInput placeholder="Localização" type="text" />
    </ProfileForm>
  );
}

export default EditProfileForm;
