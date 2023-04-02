import dateSorter from "./dateSorter";
import filterObjectsList from "./filterObjectsList";
import rssParser from "./rssParser";

export default async function feedHandler(url: string) {
  const feed = await rssParser(url);
  const relativeObject = filterObjectsList(feed);
  return dateSorter(relativeObject);
}
