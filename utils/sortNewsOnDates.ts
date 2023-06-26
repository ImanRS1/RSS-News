import { rssData } from "../interfaces/rssData.interface";
import reduceAmountOfSportNews from "./reduceAmountOfSportNews";

export default function sortNewsOnDates(
  unsortedArray: rssData[],
  totalFetch?: boolean
): rssData[] {
  const dateSortedArray: rssData[] = unsortedArray.sort(
    (a: rssData, b: rssData) =>
      new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  if (totalFetch) return reduceAmountOfSportNews(dateSortedArray);

  return dateSortedArray;
}
