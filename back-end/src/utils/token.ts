import jwt from 'jsonwebtoken';

require('dotenv/config');

const jwtKey = process.env.JWT_KEY as string;

function generateToken(id: string) {
  return jwt.sign({ data: { id } }, jwtKey, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
}

function tokenIsValid(token: string) {
  try {
    jwt.verify(token, jwtKey);
    return true;
  } catch (error) {
    return false;
  }
}

function tokenResolve(token: string) {
  const { data } = jwt.verify(token, jwtKey) as { data: { id: string } };

  return data.id;
}

export = {
  generateToken,
  tokenIsValid,
  tokenResolve,
};
