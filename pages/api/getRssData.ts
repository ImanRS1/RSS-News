import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("body på backend: ", req.body.lCusno);

  res.status(200).send({ name: "hej från backend" });
}
