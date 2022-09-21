import { parseCookies } from 'nookies';
import React from 'react';
import { TweetCardPageContainer } from '../../components/Tweet';
import TweetCard from '../../components/Tweet/TweetCard';
import getAuthUser from '../../services/auth';
import { UserDataShape } from '../userProfile';

interface TweetPropsShape {
  userData: UserDataShape;
}

function Tweet({ userData }: TweetPropsShape) {
  return (
    <TweetCardPageContainer>
      <TweetCard userData={userData} />
    </TweetCardPageContainer>
  );
}

export default Tweet;

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  const userData = getAuthUser(cookies.userToken);

  return {
    props: {
      userData: { USER_TOKEN: cookies.userToken, userId: userData.id, userName: userData.name },
    },
  };
}
