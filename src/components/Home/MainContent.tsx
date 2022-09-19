import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { useRouter } from 'next/router';
import ProfilePicture from '../../public/icons/blank-profile-picture.png';
import getAuthUser from '../../services/auth';
import {
  MainContentButtons,
  MainContentButtonsContainer,
  MainContentContainer,
  MainContentFilterButton,
  MainContentHeader,
  UserProfilePicture,
  TweetStatusCounter,
  ButtonContentContainer,
} from '.';
import { TweetsShape } from '../../pages/home';
import MenuOptions from '../MenuOptions/MenuOptions';
import { redirectToProfilePage } from '../../utils/redirectFunctions';
import { likeTweet } from '../../services/tweetApi';

export interface MainContentPropsShape {
  tweets: TweetsShape;
  USER_TOKEN: string;
}

function MainContent({ tweets, USER_TOKEN }: MainContentPropsShape) {
  const router = useRouter();

  const [isMenuVisible, setisMenuVisible] = useState(false);
  const showMenuOptions = () => {
    setisMenuVisible(!isMenuVisible);
  };

  const isThreeDotsOptionsRender = () => {
    const validateToken = getAuthUser(USER_TOKEN);
    const isValidUser = validateToken.id === tweets.User.id;
    return isValidUser;
  };

  const handleLikeTweet = async () => {
    console.log(tweets);
  };

  return (
    <MainContentContainer>
      <MainContentHeader>
        <UserProfilePicture
          onClick={() => redirectToProfilePage(router)}
          alt="main_profile_picture"
          tweetProfilePicture
          src={ProfilePicture.src}
        />
        <h2>{tweets.User.name}</h2>
        {isThreeDotsOptionsRender() && (
          <MainContentFilterButton
            onClick={showMenuOptions}
            type="button"
            aria-label="dots-option-button"
          >
            <BsThreeDots />
            {isMenuVisible && (
              <MenuOptions USER_TOKEN={USER_TOKEN} tweetId={tweets.id} />
            )}
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
        <MainContentButtons
          onClick={handleLikeTweet}
          type="button"
          aria-label="like-button"
        >
          <ButtonContentContainer>
            { true
              ? <AiFillHeart color="rgb(249, 24, 128)" />
              : <AiOutlineHeart /> }
            <TweetStatusCounter>{tweets.likes}</TweetStatusCounter>

          </ButtonContentContainer>
        </MainContentButtons>
        <MainContentButtons type="button" aria-label="share-button">
          <FiShare />
        </MainContentButtons>
      </MainContentButtonsContainer>
    </MainContentContainer>
  );
}

export default MainContent;
