import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TweetCard from '../../../../src/components/Tweet/TweetCard';

describe('Test Tweet Card component', () => {
  beforeEach(() => {
    render(<TweetCard />);
  });

  it('Tweet card must have a user profile picture', () => {
    const profilePicture = screen.getByAltText('main_profile_picture');
    expect(profilePicture).toBeInTheDocument();
  });

  it('Tweet card must have a tweet textarea', () => {
    const tweetTextArea = screen.getByRole('textbox');
    expect(tweetTextArea).toBeInTheDocument();
  });

  it('Tweet card must have a previous page button', () => {
    const previousPageButton = screen.getByRole('button', {
      name: /previous-page-button/i,
    });
    expect(previousPageButton).toBeInTheDocument();
  });

  it('Tweet card must have a tweet button', () => {
    const tweetButton = screen.getByRole('button', { name: /tweet-button/i });
    expect(tweetButton).toBeInTheDocument();
  });

  it('Tweet card must have a add image option', () => {
    const addImageButton = screen.getByRole('button', {
      name: /add-image-button/i,
    });
    expect(addImageButton).toBeInTheDocument();
  });

  it('Tweet card must have a add gif option', () => {
    const addGifButton = screen.getByRole('button', {
      name: /add-gif-button/i,
    });
    expect(addGifButton).toBeInTheDocument();
  });
});
