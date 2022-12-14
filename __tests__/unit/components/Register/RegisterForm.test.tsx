import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RegisterForm from '../../../../src/components/SignUp/RegisterForm';

describe('Test Register Form component', () => {
  beforeEach(() => {
    render(<RegisterForm />);
  });

  it('Register Form must have `name`, `email` and `password` inputs', () => {
    const nameInput = screen.getByPlaceholderText('Nome');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Senha');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('Register Form must have a Register button with text `Registrar`', () => {
    const loginButton = screen.getAllByRole('button');
    expect(loginButton[0]).toBeInTheDocument();
    expect(loginButton[0]).toHaveTextContent(/Registrar/i);
  });

  it('Register Form must have `login` link', () => {
    const registerLink = screen.getByText(/Entrar/i);
    expect(registerLink).toBeInTheDocument();
  });
});
