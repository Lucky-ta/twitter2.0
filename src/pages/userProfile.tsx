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
  const [userTweets, setUserTweets] = useState([]);
  const [userData, setUserData] = useState<any>({});

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
        <ProfileCategoriesOptions>Tweets</ProfileCategoriesOptions>
        <p>Tweets e respostas</p>
        <p>Mídia</p>
        <p>Curtidas</p>
      </ProfileCategories>
      {userTweets.map((tweet) => (
        <MainContent USER_TOKEN={USER_TOKEN} tweets={tweet} />
      ))}
      <EditProfileButton
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
  const cookies = parseCookies(context);

  const tweets: TweetsShape[] = await getAllTweets();
  return {
    props: {
      data: tweets,
      USER_TOKEN: cookies.userToken,
    },
  };
}
