import React from 'react';
import { HeaderSpacing } from '../components/Home';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import MainContent from '../components/Home/MainContent';
import { getAllTweets } from '../services/tweetApi';
import { GlobalPageContainer } from '../styles/globalContainer';

export type TweetsShape = {
  tweet: string,
  User: {
    name: string
  },
}

interface MainPropsShape {
  data: TweetsShape[],
}

function Main({ data }: MainPropsShape) {
  return (
    <GlobalPageContainer>
      <Header title="Página Inicial" />
      <HeaderSpacing />
      { data.map((tweet) => <MainContent tweets={tweet} />) }
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
