import { parseCookies } from 'nookies';
import React from 'react';
import { TweetCardPageContainer } from '../../components/Tweet';
import TweetCard from '../../components/Tweet/TweetCard';

interface TweetPropsShape {
  USER_TOKEN: string;
}

function Tweet({ USER_TOKEN }: TweetPropsShape) {
  return (
    <TweetCardPageContainer>
      <TweetCard USER_TOKEN={USER_TOKEN} />
    </TweetCardPageContainer>
  );
}

export default Tweet;

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);

  return {
    props: {
      USER_TOKEN: cookies.userToken,
    },
  };
}
