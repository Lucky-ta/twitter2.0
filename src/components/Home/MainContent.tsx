import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { parseCookies } from 'nookies';
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
import { likeTweet } from '../../services/tweetApi';

export interface MainContentPropsShape {
  tweets: TweetsShape;
  USER_TOKEN: string;
}

function MainContent({ tweets, USER_TOKEN }: MainContentPropsShape) {
  const router = useRouter();
  const validateCurrentPath = (): boolean => {
    const currentPath = router.pathname;
    const validate = currentPath === '/userProfile';
    return validate;
  };

  const [isMenuVisible, setisMenuVisible] = useState(false);
  const showMenuOptions = () => {
    setisMenuVisible(!isMenuVisible);
  };

  const isTweetInStoraged = (): boolean => {
    const currentStorage = JSON.parse(
      localStorage.getItem('likedTweets'),
    );

    const isTweetInStorage = currentStorage.some(
      (currentTweet: TweetsShape) => currentTweet.id === tweets.id,
    );
    return isTweetInStorage;
  };

  const addTweetAtStorage = () => {
    const currentStorage = JSON.parse(localStorage.getItem('likedTweets'));
    return localStorage.setItem(
      'likedTweets',
      JSON.stringify([...currentStorage, tweets]),
    );
  };

  const removeTweetFromStorage = () => {
    const currentStorage = JSON.parse(localStorage.getItem('likedTweets'));

    const storageTweetIndex = currentStorage.findIndex(
      ({ id }) => id === tweets.id,
    );
    currentStorage.splice(storageTweetIndex, 1);
    localStorage.setItem('likedTweets', JSON.stringify(currentStorage));
  };

  const handleLikeTweet = async () => {
    const isStoraged = isTweetInStoraged();
    if (isStoraged) {
      await likeTweet(tweets.id, '-', USER_TOKEN);
      return removeTweetFromStorage();
    }
    await likeTweet(tweets.id, '+', USER_TOKEN);
    return addTweetAtStorage();
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
          {tweets.likes}
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

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);

  return {
    props: {
      USER_TOKEN: cookies.userToken,
    },
  };
}
