import type { NextApiRequest, NextApiResponse } from "next";
import RSSParser from "../../utils/RSSParser";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const urlArray: string[] = req.body.urlArray;
  if (urlArray) {
    const feed = await RSSParser(urlArray[0]);
    console.log(feed);
  }

  res.status(200).send({ name: "hej från backend" });
}

// export default async function FeedHandler(url: string) {
//   const feed = await RSSParser(url);
//   const dateLinkIdTitle = FilterObjectsList(feed);
//   return DateSorter(dateLinkIdTitle);
// }
