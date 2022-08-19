/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export type ContextDataShape = {
    isValidUser: boolean;
    setIsValidUser: (isValid: boolean) => void;
    userData: {id: number, name: string, email: string};
    setUserData:() => void;
}

const ContextData: ContextDataShape = {
  isValidUser: false,
  setIsValidUser: (): void => {},
  userData: { id: 0, name: '', email: '' },
  setUserData: (): void => {},
};

const MyContext = createContext<ContextDataShape>(ContextData);

export default MyContext;
