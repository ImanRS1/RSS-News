import { rssData } from "../interfaces/rssData.interface";
import reduceAmountOfSportNews from "./reduceAmountOfSportNews";

export default function sortNewsOnDates(
  unsortedArray: rssData[],
  totalFetch?: boolean
): rssData[] {
  const newAr: rssData[] = unsortedArray.sort(
    (a: rssData, b: rssData) =>
      new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  if (totalFetch) return reduceAmountOfSportNews(newAr).slice(0, 20);

  return newAr.slice(0, 20);
}
