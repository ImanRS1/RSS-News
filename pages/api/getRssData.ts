import type { NextApiRequest, NextApiResponse } from "next";
import FeedHandler from "../../utils/FeedHandler";
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

interface rssData {
  date: string;
  title: string;
  link: string;
  id: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const urlArray: string[] = await req.body.urlArray;
  const feed = await Promise.all(urlArray.map((url) => FeedHandler(url)));
  const resultArray: [rssData] = feed.reduce((a, b) => a.concat(b), []);

  // const uniqueObjects: rssData = {
  //   date: "",
  //   title: "",
  //   link: "",
  //   id: "",
  // };
  const uniqueObjects: { [s: string]: unknown } | ArrayLike<unknown> = {};

  resultArray.forEach((obj: {}) => {
    uniqueObjects[obj.id] = obj;
  });

  return res.status(200).send(DateSorter(Object.values(uniqueObjects)));
}
