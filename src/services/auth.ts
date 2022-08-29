import jwt from 'jsonwebtoken';

require('dotenv').config();

const isAuthenticated = (token: string) => {
  const validate = jwt.verify(token, process.env.SECRET);
  return validate;
};

export default isAuthenticated;
