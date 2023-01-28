import bcrypt from 'bcrypt';

function comparePassword(pass:string, hash: string): boolean {
  return bcrypt.compareSync(pass, hash);
}

function encryptPassword(pass: string): string {
  return bcrypt.hashSync(pass, 10);
}

export = {
  comparePassword,
  encryptPassword,
};
