import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginForm from '../../../src/components/Login/LoginForm';

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

  it('Login Form must have `register` link', () => {
    const registerLink = screen.getByText(/Inscreva-se/i);
    expect(registerLink).toBeInTheDocument();
  });
});
