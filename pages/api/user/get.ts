import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
// import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

// type Props = {
//   data: User;
// };

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  const email = req.query.email || null;
  // TODO: Vérification des informations

  if (method == "GET" && email !== null) {
    try {
      const _data = await prisma.user.findUnique({
        where: {
          email: email as string,
        },
      });
      _data ? res.status(200).json(_data) : res.status(404).json("No data");
    } catch (err) {
      res.status(400).json("error : " + err);
    }
  } else if (method == "GET") {
    try {
      const _data = await prisma.user.findMany();
      res.status(200).json(_data);
    } catch (err) {
      res.status(400).json("error : " + err);
    }
  }
}
