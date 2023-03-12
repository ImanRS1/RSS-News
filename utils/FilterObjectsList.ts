import { FeedInterface } from "../interfaces/feed.interface";
import { rssItem } from "../interfaces/rssItem.interface";

export default function FilterObjectsList(objectsList: FeedInterface) {
  return objectsList.items.map((item: rssItem) => {
    return {
      date: item.isoDate,
      link: item.link,
      id: item.guid,
      title: item.title,
      content: item.content,
      contentSnippet: item.contentSnippet,
    };
  });
}
