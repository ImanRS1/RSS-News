import type { NextApiRequest, NextApiResponse } from "next";
import feedHandler from "../../utils/feedHandler";
import dateSorter from "../../utils/dateSorter";
import { rssData } from "../../interfaces/rssData.interface";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const { urlArray } = req.body;
  try {
    const feed = await Promise.all(
      urlArray.map((url: string) => feedHandler(url))
    );

    const resultArray: rssData[] = feed.reduce((a, b) => a.concat(b), []);

    const ids = resultArray.map((thisRssObject) => thisRssObject.id);
    const filteredArray = resultArray.filter(
      ({ id }, index) => !ids.includes(id, index + 1)
    );
    return res.status(200).send(dateSorter(filteredArray));
  } catch (error: any) {
    console.error("Could not fetch and parse data: ", error.message);
    return res
      .status(500)
      .send({ errorMessage: "Något gick fel, försök igen senare." });
  }
}
