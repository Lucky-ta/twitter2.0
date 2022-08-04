import React from 'react';
import UserProfilePicture from '../ProfilePicture';

function MainContent() {
  return (
    <main>
      <div>
        <UserProfilePicture />
      </div>
      <div>
        <h2>User Name</h2>
        <button type="button" aria-label="dots-option-button">
          ...
        </button>
      </div>
      <div>
        <textarea name="" id="" cols={30} rows={10} />
      </div>
      <div>
        <button type="button" aria-label="comment-button">
          Comment Button
        </button>
        <button type="button" aria-label="retweet-button">
          Retweet Button
        </button>
        <button type="button" aria-label="like-button">
          Like Button
        </button>
        <button type="button" aria-label="share-button">
          Share Button
        </button>
      </div>
      <button type="button" aria-label="create-tweet-button">
        Create Tweet Button
      </button>
    </main>
  );
}

export default MainContent;
