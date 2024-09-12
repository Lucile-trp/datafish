import { encryptionPassword } from "@/lib/bcypt";
import prisma from "@/lib/prisma";
// import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

// type Props = {
//   data: User;
// };

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  let user = req.body;
  user.role = "USER";

  // TODO: Vérification des informations

  if (method == "POST") {
    try {
      user.password = encryptionPassword(user.password);

      const _data = await prisma.user.create({
        data: user,
      });
      res.status(200).json("Nouvel utilisateur : " + _data.id);
    } catch (err) {
      res.status(400).json("error : " + err);
    }
  }
}
