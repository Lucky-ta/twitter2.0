import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MainContent from '../../../../src/components/Home/MainContent';
import { TweetsShape } from '../../../../src/pages/home';

describe('Test MainContent component', () => {
  const tweetMock: TweetsShape = {
    tweet: 'a great tweet',
    id: 2,
    User: {
      id: 12,
      name: 'Lucas',
      img: '',
    },
  };

  beforeEach(() => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');
    useRouter.mockImplementationOnce(() => ({
      pathname: '/userProfile',
    }));

    render(<MainContent tweets={tweetMock} USER_TOKEN="0000-0000" />);
  });

  it('Main content must have profile picture', () => {
    const profilePicture = screen.getByAltText('main_profile_picture');
    expect(profilePicture).toBeInTheDocument();
  });

  it('Main content must have user name', () => {
    const userName = screen.getByRole('heading');
    expect(userName).toBeInTheDocument();
  });

  it('Main content must have a comment tweet button', () => {
    const commentButton = screen.getByRole('button', {
      name: /comment-button/i,
    });
    expect(commentButton).toBeInTheDocument();
  });

  it('Main content must have a retweet tweet button', () => {
    const retweetButton = screen.getByRole('button', {
      name: /retweet-button/i,
    });
    expect(retweetButton).toBeInTheDocument();
  });

  it('Main content must have a like tweet button', () => {
    const likeButton = screen.getByRole('button', { name: /like-button/i });
    expect(likeButton).toBeInTheDocument();
  });

  it('Main content must have a share tweet button', () => {
    const shareButton = screen.getByRole('button', { name: /share-button/i });
    expect(shareButton).toBeInTheDocument();
  });

  it('Main content must have a tweet paragraph', () => {
    const tweetBox = screen.getByRole('paragraph');
    expect(tweetBox).toBeInTheDocument();
  });
});
