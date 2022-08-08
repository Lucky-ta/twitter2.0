import React from 'react';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import MainContent from '../components/Home/MainContent';
import { GlobalPageContainer } from '../styles/globalContainer';

function Main() {
  return (
    <GlobalPageContainer>
      <Header title="Página Inicial" />
      <MainContent />
      <Footer />
    </GlobalPageContainer>
  );
}

export default Main;
