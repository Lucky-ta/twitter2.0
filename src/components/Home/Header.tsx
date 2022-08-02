import React from 'react';

interface IHeaderProps {
    title: string;
}

function Header({ title }: IHeaderProps) {
  return (
    <header>
      <img src="" alt="profile_picture" />
      <h1>{ title }</h1>
      <button type="button">Filtro</button>
    </header>
  );
}

export default Header;
