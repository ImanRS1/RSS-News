import type { NextApiRequest, NextApiResponse } from "next";
import FeedHandler from "../../utils/FeedHandler";
import DateSorter from "../../utils/DateSorter";
import { rssData } from "../../interfaces/rssData.interface";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const urlArray: string[] = [
    "http://expressen.se/rss/debatt",
    "http://gt.se/rss/nyheter",
    "http://gt.se/rss/nyheter",
    "https://feeds.expressen.se/kvallsposten",
    "http://expressen.se/rss/halsa",
    "http://expressen.se/rss/kultur",
    "http://expressen.se/rss/ledare",
    "http://expressen.se/rss/motor",
    "http://expressen.se/rss/noje",
    "http://expressen.se/rss/res",
    "http://expressen.se/rss/sport",
  ];

  const feed = await Promise.all(urlArray.map((url) => FeedHandler(url)));
  const resultArray: rssData[] = feed.reduce((a, b) => a.concat(b), []);

  const ids = resultArray.map((thisRssObject) => thisRssObject.id);
  const filteredArray = resultArray.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  );

  return res.status(200).send(DateSorter(filteredArray));
}
