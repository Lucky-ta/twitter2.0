/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/global.css';

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
