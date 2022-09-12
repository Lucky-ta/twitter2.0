import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { parseCookies } from 'nookies';
import MainContent from '../components/Home/MainContent';
import Footer from '../components/Home/Footer';
import ProfileHeader from '../components/Profile/ProfileHeader';
import { getAllTweets } from '../services/tweetApi';
import { MainPropsShape, TweetsShape } from './home';
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

function UserProfile({ data, USER_TOKEN }: MainPropsShape) {
  const [tweetsCategory, setTweetsCategory] = useState('tweets');
  const [storagedTweets, setStoragedTweets] = useState([]);
  const [userTweets, setUserTweets] = useState([]);
  const [userData, setUserData] = useState<any>({});

  const renderMainContent = (mainContent: TweetsShape[]) => mainContent.map((tweet) => (
    <MainContent USER_TOKEN={USER_TOKEN} tweets={tweet} />
  ));

  const renderTweetsByCategory = () => {
    switch (tweetsCategory) {
      case 'tweets':
        return renderMainContent(userTweets);
      case 'liked':
        return renderMainContent(storagedTweets);
      default:
        return renderMainContent(userTweets);
    }
  };

  const handleCategories = ({ target }: any) => {
    setTweetsCategory(target.id);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authUser = getAuthUser(USER_TOKEN);
      setUserData(authUser);
    }
  }, []);

  useEffect(() => {
    const filteredUser = data.filter((tweet) => tweet.User.id === userData.id);
    setUserTweets(filteredUser);
  }, [userData]);

  useEffect(() => {
    const likedTweets = JSON.parse(localStorage.getItem('likedTweets'));
    setStoragedTweets(likedTweets);
  }, []);

  const redirectContact = (contactLink: string) => {
    window.location.href = contactLink;
  };

  return (
    <ProfileContainer>
      <ProfileHeader title="Perfil" />
      <HeaderSpacing />
      <ProfileInfo />
      <ProfileUserName>{userData.name}</ProfileUserName>
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
      <EditProfileButton type="button">Editar perfil</EditProfileButton>
      <Footer />
      <FooterSpacing />
    </ProfileContainer>
  );
}

export default UserProfile;

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);

  const tweets: TweetsShape[] = await getAllTweets();
  return {
    props: {
      data: tweets,
      USER_TOKEN: cookies.userToken,
    },
  };
}
