import type { NextApiRequest, NextApiResponse } from "next";
import FeedHandler from "../../utils/FeedHandler";
import DateSorter from "../../utils/DateSorter";
import { rssData } from "../../interfaces/rssData.interface";
import { urlArray } from "../../utils/urlArray";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  try {
    const feed = await Promise.all(urlArray.map((url) => FeedHandler(url)));
    const resultArray: rssData[] = feed.reduce((a, b) => a.concat(b), []);

    const ids = resultArray.map((thisRssObject) => thisRssObject.id);
    const filteredArray = resultArray.filter(
      ({ id }, index) => !ids.includes(id, index + 1)
    );
    return res.status(200).send(DateSorter(filteredArray));
  } catch (error: any) {
    console.error("Could not fetch and parse data: ", error.message);
    return res
      .status(500)
      .send({ errorMessage: "Något gick fel, försök igen senare." });
  }
}
