import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loading from '../../../../src/components/Loading/Loading';

describe('Test Loading component', () => {
  beforeEach(() => {
    render(<Loading />);
  });

  it('Loading must have user `Carregando...` h2 text', () => {
    const loadingText = screen.getByText(/Carregando.../i);
    expect(loadingText).toBeInTheDocument();
  });
});
