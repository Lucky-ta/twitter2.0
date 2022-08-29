import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { useRouter } from 'next/router';
import ProfilePicture from '../../public/icons/blank-profile-picture.png';
import {
  MainContentButtons,
  MainContentButtonsContainer,
  MainContentContainer,
  MainContentFilterButton,
  MainContentHeader,
  UserProfilePicture,
} from '.';
import { TweetsShape } from '../../pages/home';
import MenuOptions from '../MenuOptions/MenuOptions';
import { redirectToProfilePage } from '../../utils/redirectFunctions';

export interface MainContentPropsShape {
  tweets: TweetsShape;
}

function MainContent({ tweets }: MainContentPropsShape) {
  const router = useRouter();
  const validateCurrentPath = (): boolean => {
    const currentPath = window.location.pathname;
    const validate = currentPath === '/userProfile';
    return validate;
  };

  const [isMenuVisible, setisMenuVisible] = useState(false);
  const showMenuOptions = () => {
    setisMenuVisible(!isMenuVisible);
  };

  return (
    <MainContentContainer>
      <MainContentHeader>
        <UserProfilePicture
          onClick={() => redirectToProfilePage(router)}
          alt="main_profile_picture"
          tweetProfilePicture
          src={tweets.User.img ? tweets.User.img : ProfilePicture.src}
        />
        <h2>{tweets.User.name}</h2>
        {validateCurrentPath() && (
          <MainContentFilterButton
            onClick={showMenuOptions}
            type="button"
            aria-label="dots-option-button"
          >
            <BsThreeDots />
            {isMenuVisible && <MenuOptions tweetId={tweets.id} />}
          </MainContentFilterButton>
        )}
      </MainContentHeader>
      <div>
        <p role="paragraph">{tweets.tweet}</p>
      </div>
      <MainContentButtonsContainer>
        <MainContentButtons type="button" aria-label="comment-button">
          <FaRegComment />
        </MainContentButtons>
        <MainContentButtons type="button" aria-label="retweet-button">
          <FaRetweet />
        </MainContentButtons>
        <MainContentButtons type="button" aria-label="like-button">
          <AiOutlineHeart />
        </MainContentButtons>
        <MainContentButtons type="button" aria-label="share-button">
          <FiShare />
        </MainContentButtons>
      </MainContentButtonsContainer>
    </MainContentContainer>
  );
}

export default MainContent;
