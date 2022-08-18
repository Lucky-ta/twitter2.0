import React, { useState } from 'react';
import { FooterSpacing, HeaderSpacing, ShowMoreButton } from '../components/Home';
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
  const [visible, setVisible] = useState(7);
  const showMoreTweets = () => {
    setVisible(data.length);
  };
  return (
    <GlobalPageContainer>
      <Header title="Página Inicial" />
      <HeaderSpacing />
      { data.slice(0, visible).map((tweet) => <MainContent tweets={tweet} />) }
      { data.length !== visible && (
        <ShowMoreButton
          onClick={showMoreTweets}
          type="button"
        >
          mostrar mais

        </ShowMoreButton>
      ) }
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
