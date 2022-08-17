import Api from './Api';

const createTweet = async (tweet: string, userToken: string) => {
  try {
    const response = await Api.post('/tweet/create', tweet, {
      headers: { Authorization: userToken },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const deleteTweet = async (tweetId: string, userToken: string) => {
  try {
    const response = await Api.post(`/tweet/${tweetId}`, {
      headers: { Authorization: userToken },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

export { createTweet, deleteTweet };
