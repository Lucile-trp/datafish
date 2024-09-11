import { User } from "@prisma/client";

const bcrypt = require("bcryptjs");

export function encryptionPassword(password: string) {
  //HASH GENERATION
  const salt = bcrypt.genSaltSync(10);
  const enryptedPassword = bcrypt.hashSync(password, salt);

  return enryptedPassword;
}

export async function passwordVerify(
  email: string,
  password: string,
  user?: User
) {
  // Get user informations
  const userResponse = user
    ? user
    : await fetch(`/api/user/get?email=${email}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      }).then((res) => res.json());

  // Catch errors
  // TODO : gestion des erreurs.
  if (!userResponse || !userResponse.password) {
    console.error(
      "L'utilisateur n'existe pas, ou le mot de passe n'est pas stocké"
    );
  }

  const isMatch = await bcrypt.compare(password, userResponse.password);

  return isMatch;
}
