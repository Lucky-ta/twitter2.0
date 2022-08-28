import { useRouter } from 'next/router';
import React from 'react';
import { MenuOptionsButtons, MenuOptionsContainer } from '.';
import { deleteTweet } from '../../services/tweetApi';
import { redirectToHomePage } from '../../utils/redirectFunctions';

interface MenuOptionsPropsShape {
  tweetId: number;
}

function MenuOptions({ tweetId }: MenuOptionsPropsShape) {
  const router = useRouter();

  const userToken = localStorage.getItem('userToken');
  const excludeTweet = async () => {
    const result = await deleteTweet(tweetId, userToken);
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
