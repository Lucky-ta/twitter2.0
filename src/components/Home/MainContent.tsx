import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { RiQuillPenFill } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { useRouter } from 'next/router';
import ProfilePicture from '../../public/icons/blank-profile-picture.png';
import {
  CreateTweetButton,
  MainContentButtons,
  MainContentButtonsContainer,
  MainContentContainer,
  MainContentFilterButton,
  MainContentHeader,
  UserProfilePicture,
} from '.';
import { TweetsShape } from '../../pages/home';

export interface MainContentPropsShape {
  tweets: TweetsShape;
}

function MainContent({ tweets }: MainContentPropsShape) {
  const router = useRouter();
  const redirectToTweetPage = () => {
    router.push('/compose/tweet');
  };

  return (
    <MainContentContainer>
      <MainContentHeader>
        <UserProfilePicture
          alt="main_profile_picture"
          tweetProfilePicture
          src={ProfilePicture.src}
        />
        <h2>{tweets.User.name}</h2>
        <MainContentFilterButton type="button" aria-label="dots-option-button">
          <BsThreeDots />
        </MainContentFilterButton>
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
      <CreateTweetButton
        onClick={redirectToTweetPage}
        type="button"
        aria-label="create-tweet-button"
      >
        <RiQuillPenFill />
      </CreateTweetButton>
    </MainContentContainer>
  );
}

export default MainContent;
