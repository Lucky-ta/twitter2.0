import { useRouter } from 'next/router';
import React from 'react';
import { MenuOptionsButtons, MenuOptionsContainer } from '.';
import { UserDataShape } from '../../pages/userProfile';
import { deleteTweet } from '../../services/tweetApi';
import { redirectToHomePage } from '../../utils/redirectFunctions';

interface MenuOptionsPropsShape {
  tweetId: number;
  userData: UserDataShape;
}

function MenuOptions({ tweetId, userData }: MenuOptionsPropsShape) {
  const router = useRouter();

  const excludeTweet = async () => {
    const result = await deleteTweet(tweetId, userData.USER_TOKEN, userData.userId);
    if (result.message) {
      return window.alert('Não foi possível excluir o tweet.');
    }
    return redirectToHomePage(router);
  };
  return (
    <MenuOptionsContainer>
      <MenuOptionsButtons type="button" onClick={excludeTweet}>
        Excluir
      </MenuOptionsButtons>
    </MenuOptionsContainer>
  );
}

export default MenuOptions;
