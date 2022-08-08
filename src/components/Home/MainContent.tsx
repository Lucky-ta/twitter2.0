import React from 'react';
import ProfilePicture from '../../public/icons/blank-profile-picture.png';
import { UserProfilePicture } from '.';

function MainContent() {
  return (
    <main>
      <div>
        <UserProfilePicture src={ProfilePicture.src} />
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
