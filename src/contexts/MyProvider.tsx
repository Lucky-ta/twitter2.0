/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import isAuthenticated from '../services/auth';
import MyContext from './MyContext';

interface MyProviderPropsShape {
  children: React.ReactNode;
}

function MyProvider({ children }: MyProviderPropsShape) {
  const [isValidUser, setIsValidUser] = useState(false);
  const [userData, setUserData] = useState(false);

  const datas: any = {
    isValidUser,
    setIsValidUser,
    userData,
    setUserData,
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storagedUserToken = document.cookie.userToken;
      if (storagedUserToken) {
        try {
          const authUser: any = isAuthenticated(storagedUserToken);
          setUserData(authUser);
          setIsValidUser(true);
        } catch (e: any) {
          setIsValidUser(false);
        }
      }
    }
  }, []);

  return <MyContext.Provider value={datas}>{children}</MyContext.Provider>;
}

export default MyProvider;
