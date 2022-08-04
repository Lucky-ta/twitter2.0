import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import TwitterLogo from '../components/TwitterLogo';

export default function Home() {
  return (
    <div>
      <header>
        <TwitterLogo />
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
  );
}
