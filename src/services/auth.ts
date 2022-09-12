import jwt from 'jsonwebtoken';

type getAuthUserResponseShape = {
  email: string;
  exp: number;
  iat: number;
  id: number;
  name: string;
}

const getAuthUser = (token: string) => {
  const validate:
  getAuthUserResponseShape | any = jwt.verify(token, process.env.SECRET);
  return validate;
};

export default getAuthUser;
