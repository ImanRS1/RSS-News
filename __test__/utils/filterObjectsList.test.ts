import "@testing-library/jest-dom";
import { FeedInterface } from "../../interfaces/feed.interface";
import filterObjectsList from "../../utils/filterObjectsList";

const mockObjectsList: FeedInterface = {
  items: [
    {
      creator: "anna.falk@expressen.se (Anna Falk)",
      title: "Allt du vill veta om din tågsemester i Europa",
      link: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
      pubDate: new Date("Mon, 10 Apr 2023 11:12:30 +0200"),
      author: "anna.falk@expressen.se (Anna Falk)",
      content:
        "<img src='https://static.cdn-expressen.se/images/9c/9d/9c9d2ca6dc9e4c69899be073c4d618f4/16x9/265@70.jpg'/><p>Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.</p>",
      contentSnippet:
        "Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.",
      guid: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
      isoDate: new Date("2023-04-10T09:12:30.000Z"),
    },
  ],
  image: {
    link: "https://www.expressen.se/allt-om-resor/",
    url: "https://www.expressen.se/Static/images/rss/getting_rss.png",
    title: "Expressen: Allt om resor",
  },
  title: "Expressen: Allt om resor",
  description:
    "Expressens ressajt med allt om resor och inspiration, resmål, flygresor och hotellbokning",
  managingEditor: "klas.granstrom@expressen.se (Klas Granström)",
  link: "https://www.expressen.se/allt-om-resor/",
  copyright: "Copyright, AB Kvällstidningen Expressen",
};

const mockFilteredObjectsList = [
  {
    category: "Res",
    date: new Date("2023-04-10T09:12:30.000Z"),
    link: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
    id: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
    title: "Allt du vill veta om din tågsemester i Europa",
    content:
      "<img src='https://static.cdn-expressen.se/images/9c/9d/9c9d2ca6dc9e4c69899be073c4d618f4/16x9/265@70.jpg'/><p>Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.</p>",
    contentSnippet:
      "Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.",
  },
];

describe("filterObjectsList tests", () => {
  it("should filter and return relevant data based on an unfiltered list of objects", () =>
    expect(
      filterObjectsList(mockObjectsList, "http://expressen.se/rss/res")
    ).toEqual(mockFilteredObjectsList));
});
