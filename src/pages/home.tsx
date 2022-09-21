import React, { useState } from 'react';
import { parseCookies } from 'nookies';
import {
  FooterSpacing,
  HeaderSpacing,
  MainContentHomeContainer,
  ShowMoreButton,
} from '../components/Home';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import MainContent from '../components/Home/MainContent';
import { getAllLikedTweets, getAllTweets } from '../services/tweetApi';
import { GlobalPageContainer } from '../styles/globalContainer';
import myAccount from '../services/myAccountMock/myAccount';
import TweetCard from '../components/Tweet/TweetCard';
import getAuthUser from '../services/auth';
import MyProfilePicture from '../public/myPicture.png';
import { UserDataShape } from './userProfile';

export type TweetsShape = {
  tweet: string;
  id?: number;
  likes?: number;
  User: {
    name: string;
    id: number;
    img?: string;
  };
};

export interface MainPropsShape {
  data: TweetsShape[];
  userData: UserDataShape;
  likedTweets: TweetsShape[];
}

function Main({ data, userData, likedTweets }: MainPropsShape) {
  const [visible, setVisible] = useState(7);
  const showMoreTweets = () => {
    setVisible(data.length);
  };

  return (
    <GlobalPageContainer>
      <Header title="Página Inicial" />
      <HeaderSpacing />
      <MainContentHomeContainer>
        <TweetCard userData={userData} />
        {myAccount.map((tweet) => (
          <MainContent
            userData={userData}
            likedTweets={likedTweets}
            tweet={tweet}
            key={tweet.tweet}
            profilePicture={MyProfilePicture.src}
          />
        ))}
        {data
          .slice(0, visible)
          .map((tweet) => (
            <MainContent
              userData={userData}
              likedTweets={likedTweets}
              key={tweet.id}
              tweet={tweet}
            />
          ))}
      </MainContentHomeContainer>
      {data.length > visible && (
        <ShowMoreButton onClick={showMoreTweets} type="button">
          mostrar mais
        </ShowMoreButton>
      )}
      <FooterSpacing />
      <Footer />
    </GlobalPageContainer>
  );
}

export async function getServerSideProps(context) {
  const cookies: any = parseCookies(context);
  const tweets: TweetsShape[] = await getAllTweets(cookies.userToken);

  const userData = getAuthUser(cookies.userToken);
  const likedTweets = await getAllLikedTweets(userData.id, cookies.userToken);

  return {
    props: {
      data: tweets,
      userData: { USER_TOKEN: cookies.userToken, userId: userData.id, userName: userData.name },
      likedTweets,
    },
  };
}

export default Main;
