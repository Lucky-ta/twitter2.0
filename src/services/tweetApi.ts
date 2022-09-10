import Api from './Api';

const createTweet = async (tweet: string, userToken: string) => {
  try {
    const response = await Api.post('/tweet/create', { tweet }, {
      headers: { Authorization: userToken },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const deleteTweet = async (tweetId: number, userToken: string) => {
  try {
    const response = await Api.delete(`/tweet/${tweetId}`, {
      headers: { Authorization: userToken },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const getAllTweets = async () => {
  try {
    const response = await Api.get('/tweet/');
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const likeTweet = async (tweetId: number, likeSign: string, userToken: string) => {
  try {
    const response = await Api.put(`/tweet/like/${tweetId}`, { likeSign }, {
      headers: { Authorization: userToken },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

export {
  createTweet, deleteTweet, getAllTweets, likeTweet,
};
