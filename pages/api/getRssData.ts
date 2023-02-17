import type { NextApiRequest, NextApiResponse } from "next";
import FeedHandler from "../../utils/FeedHandler";
import DateSorter from "../../utils/DateSorter";
import { rssData } from "../../interfaces/rssData.interface";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const urlArray: string[] = await req.body.urlArray;
  const feed = await Promise.all(urlArray.map((url) => FeedHandler(url)));
  const resultArray: rssData[] = feed.reduce((a, b) => a.concat(b), []);

  const uniqueObjects: { [s: string]: unknown } | ArrayLike<unknown> = {};

  resultArray.forEach((obj: {}) => {
    uniqueObjects[obj.id] = obj;
  });

  return res.status(200).send(DateSorter(Object.values(uniqueObjects)));
}
