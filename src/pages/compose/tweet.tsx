import React from 'react';
import TweetCard from '../../components/Tweet/TweetCard';
import { GlobalPageContainer } from '../../styles/globalContainer';

function Tweet() {
  return (
    <GlobalPageContainer>
      <TweetCard />
    </GlobalPageContainer>
  );
}

export default Tweet;
