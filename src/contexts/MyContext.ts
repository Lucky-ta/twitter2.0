/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export type ContextDataShape = {
    isValidUser: boolean;
    setIsValidUser: (isValid: boolean) => void;
}

const ContextData: ContextDataShape = {
  isValidUser: false,
  setIsValidUser: (): void => {},
};

const MyContext = createContext<ContextDataShape>(ContextData);

export default MyContext;
