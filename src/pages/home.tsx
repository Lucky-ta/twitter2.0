import React from 'react';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import MainContent from '../components/Home/MainContent';

function Main() {
  return (
    <div>
      <Header title="Página Inicial" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Main;
