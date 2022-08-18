import React, { useContext, useEffect, useState } from 'react';
import MainContent from '../components/Home/MainContent';
import Footer from '../components/Home/Footer';
import ProfileHeader from '../components/Profile/ProfileHeader';
import MyContext from '../contexts/MyContext';
import { getAllTweets } from '../services/tweetApi';
import { GlobalPageContainer } from '../styles/globalContainer';
import { MainPropsShape, TweetsShape } from './home';
import { FooterSpacing, HeaderSpacing } from '../components/Home';
import ProfileInfo from '../components/Profile/ProfileInfo';

function UserProfile({ data }: MainPropsShape) {
  const [userTweets, setUserTweets] = useState([]);
  const { userData } = useContext(MyContext);

  useEffect(() => {
    const filteredUser = data.filter((tweet) => tweet.User.id === userData.id);
    setUserTweets(filteredUser);
  }, [userData]);

  return (
    <GlobalPageContainer>
      <ProfileHeader title="Perfil" />
      <HeaderSpacing />
      <ProfileInfo />
      { userTweets.map((tweet) => (
        <MainContent tweets={tweet} />
      )) }
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
