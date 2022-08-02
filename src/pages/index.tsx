import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import twitter from '../public/icons/twitter.png';

export default function Home() {
  return (
    <div>
      <header>
        <img src={twitter.src} width="40px" alt="twitter logo" />
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
  );
}
