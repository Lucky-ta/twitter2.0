/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import MyProvider from '../contexts/MyProvider';
import '../styles/global.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}

export default MyApp;
