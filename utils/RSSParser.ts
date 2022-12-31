import Parser from "rss-parser";
const parser = new Parser();

export default async function RSSParser(url: any) {
  return await parser.parseURL(url);
}
