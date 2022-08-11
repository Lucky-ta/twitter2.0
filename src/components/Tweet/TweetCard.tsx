import React from 'react';
import { BsArrowLeftShort, BsEmojiSmile } from 'react-icons/bs';
import { IoImageOutline } from 'react-icons/io5';
import { AiOutlineFileGif } from 'react-icons/ai';
import { ImParagraphLeft } from 'react-icons/im';
import { TbCalendarTime } from 'react-icons/tb';
import { FaGlobeAmericas } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { UserProfilePicture } from '../Home';
import ProfilePicture from '../../public/icons/blank-profile-picture.png';
import {
  LeftArrowButton,
  TweetButton,
  TweetButtons,
  TweetButtonsContainer,
  TweetContainer,
  TweetPageContainer,
  TweetTextArea,
  TweetVisiblityOptionContainer,
} from '.';

function TweetCard() {
  return (
    <TweetPageContainer>
      <LeftArrowButton>
        <BsArrowLeftShort />
      </LeftArrowButton>
      <TweetContainer>
        <UserProfilePicture tweetProfilePicture src={ProfilePicture.src} />
        <div>
          <TweetTextArea
            placeholder="O que está acontencendo?"
            name=""
            id=""
            cols={30}
            rows={10}
          />
          <TweetVisiblityOptionContainer>
            <FaGlobeAmericas />
            <p>Qualquer pessoa pode responder</p>
          </TweetVisiblityOptionContainer>
        </div>
        <div>
          <TweetButton disabled type="button" aria-label="tweet-button">
            Tweetar
          </TweetButton>
        </div>
        <TweetButtonsContainer>
          <TweetButtons type="button" aria-label="add-image-button">
            <IoImageOutline />
          </TweetButtons>
          <TweetButtons type="button" aria-label="add-gif-button">
            <AiOutlineFileGif />
          </TweetButtons>
          <TweetButtons type="button" aria-label="add-survey-button">
            <ImParagraphLeft />
          </TweetButtons>
          <TweetButtons type="button" aria-label="add-survey-button">
            <BsEmojiSmile />
          </TweetButtons>
          <TweetButtons type="button" aria-label="add-survey-button">
            <TbCalendarTime />
          </TweetButtons>
          <TweetButtons disabled type="button" aria-label="add-survey-button">
            <HiOutlineLocationMarker />
          </TweetButtons>
        </TweetButtonsContainer>
      </TweetContainer>
    </TweetPageContainer>
  );
}

export default TweetCard;
