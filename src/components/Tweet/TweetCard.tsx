import React from 'react';
import PreviousPageButton from '../previousPageButton';
import UserProfilePicture from '../profilePicture';

function TweetCard() {
  return (
    <main>
      <PreviousPageButton />
      <UserProfilePicture />
      <div>
        <textarea name="" id="" cols={30} rows={10} />
      </div>
      <div>
        <button type="button" aria-label="tweet-button">
          Tweet
        </button>
      </div>
      <div>
        <button type="button" aria-label="add-image-button">
          Add image
        </button>
        <button type="button" aria-label="add-gif-button">
          Add gif
        </button>
      </div>
    </main>
  );
}

export default TweetCard;
