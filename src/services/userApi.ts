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

const editUserName = async (userId: number, userToken: string, userName: string) => {
  try {
    const result = await Api.put(`/user/edit/${userId}`, { name: userName }, {
      headers: { Authorization: userToken },
    });
    return result.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

const getUserById = async (userId: number) => {
  try {
    const result = await Api.get(`/user/${userId}`);
    return result.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

export {
  signUpUser,
  signInUser,
  deleteUser,
  editUserName,
  getUserById,
};
