const bcrypt = require("bcryptjs");

export function encryptionPassword(password: string) {
  //HASH GENERATION
  const salt = bcrypt.genSaltSync(10);
  const enryptedPassword = bcrypt.hashSync(password, salt);

  return enryptedPassword;
}

export async function passwordVerify(email: string, password: string) {
    // Get user informations 
    const userResponse = await fetch(`/api/user/get?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    // Convert to JSON
    const userData = await userResponse.json();

    // Catch errors 
    // TODO : gestion des erreurs.
    if(!userData || !userData.password){
      console.error("L'utilisateur n'existe pas, ou le mot de passe n'est pas stocké")
    }

    const isMatch = await bcrypt.compare(password, userData.password);

    return isMatch;

}
