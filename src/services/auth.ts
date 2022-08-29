import jwt from 'jsonwebtoken';

const isAuthenticated = (token: string) => {
  console.log(process.env.SECRET);

  const validate = jwt.verify(token, process.env.SECRET);
  return validate;
};

export default isAuthenticated;
