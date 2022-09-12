import Api from './Api';

export type NewUserShape = {
    name: string,
    email: string,
    password: string
}

export type UserCredentialsShape = {
  email: string,
  password: string
}

const signUpUser = async (newUser: NewUserShape) => {
  try {
    const result = await Api.post('/user/create', newUser);
    return result.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const signInUser = async (userCredentials: UserCredentialsShape) => {
  try {
    const result = await Api.post('/user/login', userCredentials);
    return result.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const addLikedTweet = async (userId: number, tweetId: number, userToken: string) => {
  try {
    const result = await Api.post(`/likedTweets/${userId}/${tweetId}`, {
      headers: { Authorization: userToken },
    });
    return result.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const removeLikedTweet = async (userId: number, tweetId: number, userToken: string) => {
  try {
    const result = await Api.delete(`/likedTweets/${userId}/${tweetId}`, {
      headers: { Authorization: userToken },
    });
    return result.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const getLikedTweetsByUserId = async (userId: number, userToken: string) => {
  try {
    const result = await Api.delete(`/likedTweets/${userId}`, {
      headers: { Authorization: userToken },
    });
    return result.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const deleteUser = async (userId: number, userToken: string) => {
  try {
    const result = await Api.delete(`/user/exclude/${userId}`, {
      headers: { Authorization: userToken },
    });
    return result.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

export {
  signUpUser,
  signInUser,
  deleteUser,
  addLikedTweet,
  removeLikedTweet,
  getLikedTweetsByUserId,
};
