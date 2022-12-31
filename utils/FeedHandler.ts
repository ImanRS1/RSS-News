import DateSorter from "./DateSorter";
import FilterObjectsList from "./FilterObjectsList";
import RSSParser from "./RSSParser";

export default async function FeedHandler(url: string) {
  const feed = await RSSParser(url);
  const dateLinkIdTitle = FilterObjectsList(feed);
  return DateSorter(dateLinkIdTitle);
}
