import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginForm from '../../../../src/components/Login/LoginForm';

describe('Test Login Form component', () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it('Login Form must have `email` and `password` inputs', () => {
    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Senha');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('Login Form must have a login button with text `Entrar`', () => {
    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveTextContent(/Entrar/i);
  });

  it('Login Form must have `register` link', () => {
    const registerLink = screen.getByText(/Inscreva-se/i);
    expect(registerLink).toBeInTheDocument();
  });

  it('Redirect to register page after `Register button` has been clicked on', () => {
    const registerLink = screen.getByText(/Inscreva-se/i);
    expect(registerLink).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText('Nome');
    expect(nameInput).toBeInTheDocument();
  });
});
