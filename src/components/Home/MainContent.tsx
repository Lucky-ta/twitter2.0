import React from 'react';

function MainContent() {
  return (
    <main>
      <div>
        <img src="" alt="main_profile_picture" />
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
    </main>
  );
}

export default MainContent;
