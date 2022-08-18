import { useRouter } from 'next/router';
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { ProfileHeaderContainer } from '.';
import { LeftArrowButton } from '../Tweet';

export interface ProfileHeaderPropsShape {
    title: string;
}

function ProfileHeader({ title }: ProfileHeaderPropsShape) {
  const router = useRouter();
  const redirectToHomePage = () => {
    router.push('/home');
  };
  return (
    <ProfileHeaderContainer>
      <LeftArrowButton>
        <BsArrowLeftShort
          role="button"
          aria-label="previous-page-button"
          onClick={redirectToHomePage}
        />
      </LeftArrowButton>
      <h3>{ title }</h3>
    </ProfileHeaderContainer>
  );
}

export default ProfileHeader;
