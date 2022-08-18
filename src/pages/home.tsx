import React, { useContext, useState } from 'react';
import {
  FooterSpacing,
  HeaderSpacing,
  ShowMoreButton,
} from '../components/Home';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import MainContent from '../components/Home/MainContent';
import MyContext from '../contexts/MyContext';
import { getAllTweets } from '../services/tweetApi';
import { GlobalPageContainer } from '../styles/globalContainer';
import ErrorPage from './error';

export type TweetsShape = {
  tweet: string;
  User: {
    name: string;
  };
};

interface MainPropsShape {
  data: TweetsShape[];
}

function Main({ data }: MainPropsShape) {
  const { isValidUser } = useContext(MyContext);
  const [visible, setVisible] = useState(7);
  const showMoreTweets = () => {
    setVisible(data.length);
  };

  if (isValidUser) {
    return (
      <GlobalPageContainer>
        <Header title="Página Inicial" />
        <HeaderSpacing />
        {data.slice(0, visible).map((tweet) => (
          <MainContent tweets={tweet} />
        ))}
        {data.length !== visible && (
          <ShowMoreButton onClick={showMoreTweets} type="button">
            mostrar mais
          </ShowMoreButton>
        )}
        <FooterSpacing />
        <Footer />
      </GlobalPageContainer>
    );
  }
  return <ErrorPage />;
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
