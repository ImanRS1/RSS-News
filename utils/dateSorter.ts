import { rssData } from "../interfaces/rssData.interface";

export default function dateSorter(unsortedArray: rssData[]): rssData[] {
  const newAr: rssData[] = unsortedArray.sort(
    (a: rssData, b: rssData) =>
      new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  if (newAr[0]?.category === "Sport") return newAr.slice(0, 3);
  return newAr.slice(0, 20);
}
