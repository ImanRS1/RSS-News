import sortNewsOnDates from "./sortNewsOnDates";
import filterObjectsList from "./filterObjectsList";
import rssParser from "./rssParser";

export default async function feedHandler(url: string, totalFetch?: boolean) {
  const feed = await rssParser(url);
  const relativeObjects = filterObjectsList(feed, url);

  return sortNewsOnDates(relativeObjects, totalFetch);
}
