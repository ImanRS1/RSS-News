import type { NextApiRequest, NextApiResponse } from "next";
import RSSParser from "../../utils/RSSParser";
import FeedHandler from "../../utils/FeedHandler";
import FilterObjectsList from "../../utils/FilterObjectsList";
import DateSorter from "../../utils/DateSorter";

// type Data = {
//   status: string;
//   value: object;
// };

// value: {
//   items: Array<Object>;
//   image: Object;
//   title: string;
//   description: string;
//   managingEditor: string;
//   link: string;
//   copyright: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const urlArray: string[] = await req.body.urlArray;
  const feed = await Promise.all(urlArray.map((url) => FeedHandler(url)));
  const resultArray = feed.reduce((a, b) => a.concat(b), []);

  const uniqueObjects = {};
  resultArray.forEach((obj) => {
    uniqueObjects[obj.id] = obj;
  });

  return res.status(200).send(DateSorter(Object.values(uniqueObjects)));
}
