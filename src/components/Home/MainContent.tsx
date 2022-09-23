import React, { useEffect, useState } from 'react';
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
import { UserDataShape } from '../../pages/userProfile';

export interface MainContentPropsShape {
  tweet: TweetsShape;
  userData: UserDataShape;
  likedTweets: TweetsShape[];
  profilePicture?: string;
}

function MainContent({
  tweet, userData, likedTweets, profilePicture,
}: MainContentPropsShape) {
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();

  const [isMenuVisible, setisMenuVisible] = useState(false);
  const showMenuOptions = () => {
    setisMenuVisible(!isMenuVisible);
  };

  const isThreeDotsOptionsRender = () => {
    const validateToken = getAuthUser(userData.USER_TOKEN);
    const isValidUser = validateToken.id === tweet.User.id;
    return isValidUser;
  };

  const handleLikeTweet = async () => {
    await likeTweet(userData.userId, tweet.id, userData.USER_TOKEN);
    setIsLiked(!isLiked);
  };

  const isTweetLiked = () => {
    const result: boolean = likedTweets.some(({ id }) => tweet.id === id);
    setIsLiked(result);
  };

  useEffect(() => {
    isTweetLiked();
  }, []);

  return (
    <MainContentContainer>
      <MainContentHeader>
        <UserProfilePicture
          onClick={() => redirectToProfilePage(router)}
          alt="main_profile_picture"
          tweetProfilePicture
          src={profilePicture || ProfilePicture.src}
        />
        <h2>{tweet.User.name}</h2>
        {isThreeDotsOptionsRender() && (
          <MainContentFilterButton
            onClick={showMenuOptions}
            type="button"
            aria-label="dots-option-button"
          >
            <BsThreeDots />
            {isMenuVisible && (
              <MenuOptions userData={userData} tweetId={tweet.id} />
            )}
          </MainContentFilterButton>
        )}
      </MainContentHeader>
      <div>
        <p role="paragraph">{tweet.tweet}</p>
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
            { isLiked
              ? <AiFillHeart color="rgb(249, 24, 128)" />
              : <AiOutlineHeart /> }
            <TweetStatusCounter>{tweet.likes}</TweetStatusCounter>

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
