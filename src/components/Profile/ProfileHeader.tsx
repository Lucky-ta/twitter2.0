import { useRouter } from 'next/router';
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { ProfileHeaderContainer } from '.';
import Routes from '../../utils/redirectFunctions';
import { LeftArrowButton } from '../Tweet';

export interface ProfileHeaderPropsShape {
    title: string;
}

function ProfileHeader({ title }: ProfileHeaderPropsShape) {
  const router = useRouter();
  const redirect = new Routes(router);

  return (
    <ProfileHeaderContainer>
      <LeftArrowButton>
        <BsArrowLeftShort
          role="button"
          aria-label="previous-page-button"
          onClick={() => redirect.redirectToHomePage()}
        />
      </LeftArrowButton>
      <h3>{ title }</h3>
    </ProfileHeaderContainer>
  );
}

export default ProfileHeader;
