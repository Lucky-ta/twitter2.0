/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

interface MyProviderPropsShape {
  children: React.ReactNode;
}

function MyProvider({ children }: MyProviderPropsShape) {
  const [userToken, setUserToken] = useState('');

  const datas: any = {
    userToken,
    setUserToken,
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storagedLikedTweets = localStorage.getItem('likedTweets');
      if (!storagedLikedTweets) {
        localStorage.setItem('likedTweets', JSON.stringify([]));
      }
    }
  }, []);

  return <MyContext.Provider value={datas}>{children}</MyContext.Provider>;
}

export default MyProvider;
