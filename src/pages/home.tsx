import React, { useState } from 'react';
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
}

function Main({ data }: MainPropsShape) {
  const [visible, setVisible] = useState(7);
  const showMoreTweets = () => {
    setVisible(data.length);
  };

  return (
    <GlobalPageContainer>
      <Header title="Página Inicial" />
      <HeaderSpacing />
      <MainContentHomeContainer>
        <TweetCard />
        { myAccount.map((tweet) => (<MainContent tweets={tweet} />)) }
        {data
          .reverse()
          .slice(0, visible)
          .map((tweet) => (
            <MainContent tweets={tweet} />
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

export async function getServerSideProps() {
  const tweets: TweetsShape[] = await getAllTweets();
  return {
    props: {
      data: tweets,
    },
  };
}

export default Main;
