import React from 'react';
import UserProfilePicture from '../ProfilePicture';

interface IHeaderProps {
    title: string;
}

function Header({ title }: IHeaderProps) {
  return (
    <header>
      <UserProfilePicture />
      <h1>{ title }</h1>
      <button type="button">Filtro</button>
    </header>
  );
}

export default Header;
