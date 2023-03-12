export interface FeedInterface {
  items: [FeedItem];
  image: imageData;
  title: string;
  description: string;
  managingEditor: string;
  link: string;
  copyright: string;
}

export interface FeedItem {
  creator: string;
  title: string;
  link: string;
  pubDate: Date;
  author: string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: Date;
}

export interface imageData {
  link: string;
  url: string;
  title: string;
}
