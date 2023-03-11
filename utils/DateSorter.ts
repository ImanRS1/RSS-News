import { rssData } from "../interfaces/rssData.interface";

export default function DateSorter(unsortedArray: rssData[]): rssData[] {
  const newAr: rssData[] = unsortedArray.sort(
    (a: rssData, b: rssData) =>
      new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );
  return newAr.slice(0, 10);
}
