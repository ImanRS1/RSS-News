import type { NextApiRequest, NextApiResponse } from "next";
import feedHandler from "../../utils/feedHandler";
import sortOnNewsDates from "../../utils/sortNewsOnDates";
import { rssData } from "../../interfaces/rssData.interface";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  try {
    const { urlArray, section, totalFetch } = req.body;

    const feeds = await Promise.all(
      urlArray.map((url: string, totalFetch?: boolean) =>
        feedHandler(url, totalFetch)
      )
    );

    const concatenatedFeeds: rssData[] = feeds.reduce(
      (a, b) => a.concat(b),
      []
    );

    const ids = concatenatedFeeds.map((thisRssObject) => thisRssObject.id);

    const uniqueArticles = concatenatedFeeds.filter(
      ({ id }, index) => !ids.includes(id, index + 1)
    );

    return res
      .status(200)
      .send(sortOnNewsDates(uniqueArticles).slice(section, section + 10));
  } catch (error: any) {
    console.error("Could not fetch and parse data: ", error.message);
    return res
      .status(500)
      .send({ errorMessage: "Något gick fel, försök igen senare." });
  }
}
