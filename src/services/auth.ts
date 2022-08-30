import jwt from 'jsonwebtoken';

const getAuthUser = (token: string) => {
  const validate = jwt.verify(token, process.env.SECRET);
  return validate;
};

export default getAuthUser;
