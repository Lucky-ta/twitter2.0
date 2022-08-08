import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { RiQuillPenFill } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import ProfilePicture from '../../public/icons/blank-profile-picture.png';
import { MainContentContainer, UserProfilePicture } from '.';

function MainContent() {
  return (
    <MainContentContainer>
      <div>
        <UserProfilePicture src={ProfilePicture.src} />
      </div>
      <div>
        <h2>User Name</h2>
        <button type="button" aria-label="dots-option-button">
          <BsThreeDots />
        </button>
      </div>
      <div>
        <textarea name="" id="" cols={30} rows={10} />
      </div>
      <div>
        <button type="button" aria-label="comment-button">
          <FaRegComment />
        </button>
        <button type="button" aria-label="retweet-button">
          <FaRetweet />
        </button>
        <button type="button" aria-label="like-button">
          <AiOutlineHeart />
        </button>
        <button type="button" aria-label="share-button">
          <FiShare />
        </button>
      </div>
      <button type="button" aria-label="create-tweet-button">
        <RiQuillPenFill />
      </button>
    </MainContentContainer>
  );
}

export default MainContent;
