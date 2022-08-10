import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { RiQuillPenFill } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
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

function MainContent() {
  return (
    <MainContentContainer>
      <MainContentHeader>
        <UserProfilePicture tweetProfilePicture src={ProfilePicture.src} />
        <h2>User Name</h2>
        <MainContentFilterButton type="button" aria-label="dots-option-button">
          <BsThreeDots />
        </MainContentFilterButton>
      </MainContentHeader>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
          eum eligendi. Provident in vitae optio odio, maiores placeat
          voluptates non facilis quaerat, harum culpa consequuntur laborum
          numquam suscipit! Et, qui.
        </p>
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
      <CreateTweetButton type="button" aria-label="create-tweet-button">
        <RiQuillPenFill />
      </CreateTweetButton>
    </MainContentContainer>
  );
}

export default MainContent;
