import { FeedInterface } from "../interfaces/feed.interface";
import { rssItem } from "../interfaces/rssItem.interface";
import getCategoryFromUrl from "./getCategoryFromUrl";

export default function filterObjectsList(
  objectsList: FeedInterface,
  url: string
) {
  const category = getCategoryFromUrl(url);

  return objectsList.items.map((item: rssItem) => ({
    category,
    date: item.isoDate,
    link: item.link,
    id: item.guid,
    title: item.title,
    content: item.content,
    contentSnippet: item.contentSnippet,
  }));
}
