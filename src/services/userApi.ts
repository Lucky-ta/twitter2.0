import Api from './Api';

export type NewUserShape = {
    name: string,
    email: string,
    password: string
}

const signUpUser = async (newUser: NewUserShape) => {
  const result = await Api.post('/user/create', newUser);
  return result.data;
};

export { signUpUser };
