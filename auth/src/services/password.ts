import {hash, compare}  from 'bcrypt';

export class Password {
  static async toHash(password: string) {
    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);
    return hashedPassword;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const passwordMatched = await compare(suppliedPassword, storedPassword);
    return passwordMatched;
  }
}
