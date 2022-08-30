/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
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

  return <MyContext.Provider value={datas}>{children}</MyContext.Provider>;
}

export default MyProvider;
