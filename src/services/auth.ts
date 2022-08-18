import jwt from 'jsonwebtoken';
import SECRET from './secret';

const isAuthenticated = (token: string) => {
  const validate = jwt.verify(token, SECRET);
  return validate;
};

export default isAuthenticated;
