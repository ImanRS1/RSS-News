import Parser from "rss-parser";
import { FeedInterface } from "../interfaces/feed.interface";

const parser: Parser<FeedInterface> = new Parser();

export default async function RSSParser(url: string) {
  return await parser.parseURL(url);
}
