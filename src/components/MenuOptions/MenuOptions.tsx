import { useRouter } from 'next/router';
import React from 'react';
import { MenuOptionsButtons, MenuOptionsContainer } from '.';
import { deleteTweet } from '../../services/tweetApi';
import { redirectToHomePage } from '../../utils/redirectFunctions';

interface MenuOptionsPropsShape {
  tweetId: number;
  USER_TOKEN: string;
}

function MenuOptions({ tweetId, USER_TOKEN }: MenuOptionsPropsShape) {
  const router = useRouter();

  const excludeTweet = async () => {
    const result = await deleteTweet(tweetId, USER_TOKEN);
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
