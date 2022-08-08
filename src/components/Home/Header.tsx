/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsStars } from 'react-icons/bs';
import ProfilePicture from '../../public/icons/blank-profile-picture.png';
import {
  HeaderFilterButton,
  HeaderTitle,
  MainPageHeader,
  UserProfilePicture,
} from '.';

interface IHeaderProps {
  title: string;
}

function Header({ title }: IHeaderProps) {
  return (
    <MainPageHeader>
      <UserProfilePicture src={ProfilePicture.src} />
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderFilterButton type="button">
        <BsStars />
      </HeaderFilterButton>
    </MainPageHeader>
  );
}

export default Header;
