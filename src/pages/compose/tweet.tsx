import React, { useContext } from 'react';
import TweetCard from '../../components/Tweet/TweetCard';
import MyContext from '../../contexts/MyContext';
import { GlobalPageContainer } from '../../styles/globalContainer';
import ErrorPage from '../error';

function Tweet() {
  const { isValidUser } = useContext(MyContext);

  if (isValidUser) {
    return (
      <GlobalPageContainer>
        <TweetCard />
      </GlobalPageContainer>
    );
  }
  return <ErrorPage />;
}

export default Tweet;
