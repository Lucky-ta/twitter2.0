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
import { getAllTweets } from '../services/tweetApi';
import { GlobalPageContainer } from '../styles/globalContainer';
import myAccount from '../services/myAccountMock/myAccount';
import TweetCard from '../components/Tweet/TweetCard';

export type TweetsShape = {
  tweet: string;
  id?: number;
  User: {
    name: string;
    id: number;
    img?: string;
  };
};

export interface MainPropsShape {
  data: TweetsShape[];
  USER_TOKEN: string;
}

function Main({ data, USER_TOKEN }: MainPropsShape) {
  const [visible, setVisible] = useState(7);
  const showMoreTweets = () => {
    setVisible(data.length);
  };

  return (
    <GlobalPageContainer>
      <Header title="Página Inicial" />
      <HeaderSpacing />
      <MainContentHomeContainer>
        <TweetCard USER_TOKEN={USER_TOKEN} />
        {myAccount.map((tweet) => (
          <MainContent USER_TOKEN={USER_TOKEN} tweets={tweet} />
        ))}
        {data
          .reverse()
          .slice(0, visible)
          .map((tweet) => (
            <MainContent
              USER_TOKEN={USER_TOKEN}
              key={tweet.id}
              tweets={tweet}
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
  const cookies = parseCookies(context);

  const tweets: TweetsShape[] = await getAllTweets();

  return {
    props: {
      data: tweets,
      USER_TOKEN: cookies.userToken,
    },
  };
}

export default Main;
