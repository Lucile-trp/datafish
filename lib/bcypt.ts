import { User } from "@prisma/client";

const bcrypt = require("bcryptjs");

export function encryptionPassword(password: string) {
  //HASH GENERATION
  const salt = bcrypt.genSaltSync(10);
  const enryptedPassword = bcrypt.hashSync(password, salt);

  return enryptedPassword;
}

export async function passwordVerify(
  password: string,
  password_hash: string,
) {

  const isMatch = await bcrypt.compare(password, password_hash);

  return isMatch;
}
