import React, { useContext, useEffect, useState } from 'react';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Router from 'next/router';
import MainContent from '../components/Home/MainContent';
import Footer from '../components/Home/Footer';
import ProfileHeader from '../components/Profile/ProfileHeader';
import MyContext from '../contexts/MyContext';
import { getAllTweets } from '../services/tweetApi';
import { GlobalPageContainer } from '../styles/globalContainer';
import { MainPropsShape, TweetsShape } from './home';
import { FooterSpacing, HeaderSpacing } from '../components/Home';
import ProfileInfo from '../components/Profile/ProfileInfo';
import {
  ContactButton,
  EditProfileButton,
  ProfileCategories,
  ProfileCategoriesOptions,
  ProfileContactContainer,
  ProfileUserName,
} from '../components/Profile';

function UserProfile({ data }: MainPropsShape) {
  const [userTweets, setUserTweets] = useState([]);
  const { userData } = useContext(MyContext);

  useEffect(() => {
    const filteredUser = data.filter((tweet) => tweet.User.id === userData.id);
    setUserTweets(filteredUser);
  }, [userData]);

  const redirectContact = (contactLink: string) => {
    window.location.href = contactLink;
  };

  const redirectToEditProfilePage = () => {
    Router.push('/settings/profile');
  };
  return (
    <GlobalPageContainer>
      <ProfileHeader title="Perfil" />
      <HeaderSpacing />
      <ProfileInfo />
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
        <ProfileCategoriesOptions>Tweets</ProfileCategoriesOptions>
        <p>Tweets e respostas</p>
        <p>Mídia</p>
        <p>Curtidas</p>
      </ProfileCategories>
      {userTweets.map((tweet) => (
        <MainContent tweets={tweet} />
      ))}
      <EditProfileButton
        onClick={redirectToEditProfilePage}
        type="button"
      >
        Editar perfil

      </EditProfileButton>
      <ProfileUserName>{userData.name}</ProfileUserName>
      <Footer />
      <FooterSpacing />
    </GlobalPageContainer>
  );
}

export default UserProfile;

export async function getServerSideProps() {
  const tweets: TweetsShape[] = await getAllTweets();
  return {
    props: {
      data: tweets,
    },
  };
}
