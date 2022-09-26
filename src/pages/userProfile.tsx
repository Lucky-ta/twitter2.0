import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import MainContent from '../components/Home/MainContent';
import Footer from '../components/Home/Footer';
import ProfileHeader from '../components/Profile/ProfileHeader';
import { getAllLikedTweets, getAllTweets } from '../services/tweetApi';
import { TweetsShape } from './home';
import { FooterSpacing, HeaderSpacing } from '../components/Home';
import ProfileInfo from '../components/Profile/ProfileInfo';
import {
  ContactButton,
  EditProfileButton,
  ProfileCategories,
  ProfileCategoriesOptions,
  ProfileContactContainer,
  ProfileContainer,
  ProfileUserName,
} from '../components/Profile';
import getAuthUser from '../services/auth';
import Routes from '../utils/redirectFunctions';
import { getUserById } from '../services/userApi';

export type UserDataShape = {
  USER_TOKEN: string;
  userId: number;
  userName: string;
};

interface UserProfilePropsShape {
  data: TweetsShape[];
  userData: UserDataShape;
  likedTweets: any;
}

function UserProfile({ data, userData, likedTweets }: UserProfilePropsShape) {
  const router = useRouter();
  const redirect = new Routes(router);

  const [tweetsCategory, setTweetsCategory] = useState('tweets');
  const [userTweets, setUserTweets] = useState([]);

  const renderMainContent = (mainContent: TweetsShape[]) => mainContent.map((tweet) => (
    <MainContent
      userData={userData}
      tweet={tweet}
      likedTweets={likedTweets}
    />
  ));

  const renderTweetsByCategory = () => {
    switch (tweetsCategory) {
      case 'tweets':
        return renderMainContent(userTweets);
      case 'liked':
        return renderMainContent(likedTweets);
      default:
        return renderMainContent(userTweets);
    }
  };

  const handleCategories = ({ target }: any) => {
    setTweetsCategory(target.id);
  };

  useEffect(() => {
    const filteredUser = data.filter(
      (tweet) => tweet.User.id === userData.userId,
    );
    setUserTweets(filteredUser);
  }, [userData]);

  const redirectContact = (contactLink: string) => {
    window.location.href = contactLink;
  };

  return (
    <ProfileContainer>
      <ProfileHeader title="Perfil" />
      <HeaderSpacing />
      <ProfileInfo />
      <ProfileUserName>{userData.userName}</ProfileUserName>
      <ProfileContactContainer>
        <ContactButton
          id="https://www.linkedin.com/in/lucasmaieski/"
          onClick={({ target }: any) => redirectContact(target.id)}
        >
          <AiOutlineLinkedin />
          Linkedin
        </ContactButton>
        <ContactButton
          id="https://github.com/Lucky-ta"
          onClick={({ target }: any) => redirectContact(target.id)}
        >
          <AiFillGithub />
          GitHub
        </ContactButton>
        <ContactButton
          id="https://lucasmaieski.vercel.app/"
          onClick={({ target }: any) => redirectContact(target.id)}
        >
          <CgProfile />
          Portfolio
        </ContactButton>
      </ProfileContactContainer>
      <ProfileCategories>
        <ProfileCategoriesOptions
          mainCategory={tweetsCategory === 'tweets'}
          type="button"
          id="tweets"
          onClick={(e) => handleCategories(e)}
        >
          Tweets
        </ProfileCategoriesOptions>
        <ProfileCategoriesOptions
          mainCategory={tweetsCategory === 'response'}
          type="button"
          id="response"
          onClick={(e) => handleCategories(e)}
        >
          Tweets e respostas
        </ProfileCategoriesOptions>
        <ProfileCategoriesOptions
          mainCategory={tweetsCategory === 'media'}
          type="button"
          id="media"
          onClick={(e) => handleCategories(e)}
        >
          Mídia
        </ProfileCategoriesOptions>
        <ProfileCategoriesOptions
          mainCategory={tweetsCategory === 'liked'}
          type="button"
          id="liked"
          onClick={(e) => handleCategories(e)}
        >
          Curtidas
        </ProfileCategoriesOptions>
      </ProfileCategories>
      {renderTweetsByCategory()}
      <EditProfileButton
        onClick={() => redirect.redirectToEditProfilePage()}
        type="button"
      >
        Editar perfil
      </EditProfileButton>
      <Footer />
      <FooterSpacing />
    </ProfileContainer>
  );
}

export default UserProfile;

export async function getServerSideProps(context) {
  const cookies: any = parseCookies(context);

  const tweets: TweetsShape[] = await getAllTweets(cookies.userToken);
  const userData = getAuthUser(cookies.userToken);
  const currentUserData = await getUserById(userData.id);

  const likedTweets = await getAllLikedTweets(userData.id, cookies.userToken);

  return {
    props: {
      data: tweets,
      userData: {
        USER_TOKEN: cookies.userToken,
        userId: userData.id,
        userName: currentUserData.name,
      },
      likedTweets,
    },
  };
}
