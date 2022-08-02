import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../../../src/components/Home/Header';

describe('Test main page Header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Header must have user profile picture', () => {
    const profilePicture = screen.getByRole('img');
    expect(profilePicture).toBeInTheDocument();
  });

  it('Header must have a page title', () => {
    const headerTitle = screen.getByRole('heading');
    expect(headerTitle).toBeInTheDocument();
  });

  it('Header must have user tweet preferences filter button', () => {
    const filterButton = screen.getByRole('button');
    expect(filterButton).toBeInTheDocument();
  });
});
