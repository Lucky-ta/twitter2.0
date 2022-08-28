import React, { useContext } from 'react';
import { TweetCardPageContainer } from '../../components/Tweet';
import TweetCard from '../../components/Tweet/TweetCard';
import MyContext from '../../contexts/MyContext';
import ErrorPage from '../error';

function Tweet() {
  const { isValidUser } = useContext(MyContext);

  if (isValidUser) {
    return (
      <TweetCardPageContainer>
        <TweetCard />
      </TweetCardPageContainer>
    );
  }
  return <ErrorPage />;
}

export default Tweet;
