import Api from './Api';

const createTweet = async (tweet: string, userToken: string, userId: number) => {
  try {
    const response = await Api.post(`/tweet/create/${userId}`, { tweet }, {
      headers: { Authorization: userToken, 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const deleteTweet = async (tweetId: number, userToken: string, userId: number) => {
  try {
    const response = await Api.delete(`/tweet/${tweetId}/${userId}`, {
      headers: { Authorization: userToken },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const getAllTweets = async (userToken: string) => {
  try {
    const response = await Api.get('/tweet/', {
      headers: { Authorization: userToken },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const likeTweet = async (userId: number, tweetId: number, userToken: string) => {
  try {
    const response = await Api.post(`/tweet/like/${userId}/${tweetId}`, {}, {
      headers: { Authorization: userToken },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const getAllLikedTweets = async (userId: number, userToken: string) => {
  try {
    const response = await Api.get(`/tweet/liked/${userId}`, {
      headers: { Authorization: userToken },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

export {
  createTweet,
  deleteTweet,
  getAllTweets,
  likeTweet,
  getAllLikedTweets,
};
