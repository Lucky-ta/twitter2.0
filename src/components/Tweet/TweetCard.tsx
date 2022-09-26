import { useRouter } from 'next/router';
import React, { useState } from 'react';
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
import { createTweet } from '../../services/tweetApi';
import Routes from '../../utils/redirectFunctions';

interface TweetCardPropsShape {
  userData: { USER_TOKEN: string; userId: number; userName: string };
}

function TweetCard({ userData }: TweetCardPropsShape) {
  const [tweet, setTweet] = useState('');

  const router = useRouter();
  const redirect = new Routes(router);

  const postNewTweet = async () => {
    const response = await createTweet(
      tweet,
      userData.USER_TOKEN,
      userData.userId,
    );
    if (response.id) {
      setTweet('');
      return redirect.redirectToHomePage();
    }
    return window.alert('Tweet inválido');
  };

  return (
    <TweetPageContainer>
      <LeftArrowButton
        aria-label="previous-page-button"
        onClick={() => redirect.redirectToHomePage()}
      >
        <BsArrowLeftShort />
      </LeftArrowButton>
      <TweetContainer>
        <UserProfilePicture
          onClick={() => redirect.redirectToProfilePage()}
          alt="main_profile_picture"
          tweetProfilePicture
          src={ProfilePicture.src}
        />
        <div>
          <TweetTextArea
            placeholder="O que está acontencendo?"
            name=""
            id=""
            cols={30}
            rows={10}
            onChange={({ target }: any) => setTweet(target.value)}
            value={tweet}
          />
          <TweetVisiblityOptionContainer>
            <FaGlobeAmericas />
            <p>Qualquer pessoa pode responder</p>
          </TweetVisiblityOptionContainer>
        </div>
        <div>
          <TweetButton
            disabled={tweet.length === 0}
            type="button"
            aria-label="tweet-button"
            onClick={() => postNewTweet()}
          >
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
          <TweetButtons type="button" aria-label="add-emoji-button">
            <BsEmojiSmile />
          </TweetButtons>
          <TweetButtons type="button" aria-label="add-calendar-button">
            <TbCalendarTime />
          </TweetButtons>
          <TweetButtons disabled type="button" aria-label="add-location-button">
            <HiOutlineLocationMarker />
          </TweetButtons>
        </TweetButtonsContainer>
      </TweetContainer>
    </TweetPageContainer>
  );
}

export default TweetCard;
