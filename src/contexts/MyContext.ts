/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export type ContextDataShape = {
    userToken: string;
    setUserToken: (token: string) => void;
}

const ContextData: ContextDataShape = {
  userToken: '',
  setUserToken: (): void => {},
};

const MyContext = createContext<ContextDataShape>(ContextData);

export default MyContext;
