import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../../../../src/components/Home/Footer';

describe('Test main page Footer component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('Main page footer must have 4 buttons', () => {
    const footerButtons = screen.getAllByRole('button');
    expect(footerButtons.length).toBe(4);
  });
});
