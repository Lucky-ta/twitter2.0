import Api from './Api';

export type NewUserShape = {
    name: string,
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

export { signUpUser };
