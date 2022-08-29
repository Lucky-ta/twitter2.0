import jwt from 'jsonwebtoken';

const isAuthenticated = (token: string) => {
  const validate = jwt.verify(token, process.env.SECRET);
  return validate;
};

export default isAuthenticated;
