import "@testing-library/jest-dom";
import { rssData } from "../../interfaces/rssData.interface";
import sortNewsOnDates from "../../utils/sortNewsOnDates";

const mockFilteredObjectsList: rssData[] = [
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
  {
    category: "Res",
    date: new Date("2023-04-14T09:12:30.000Z"),
    link: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
    id: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
    title: "Allt du vill veta om din tågsemester i Europa",
    content:
      "<img src='https://static.cdn-expressen.se/images/9c/9d/9c9d2ca6dc9e4c69899be073c4d618f4/16x9/265@70.jpg'/><p>Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.</p>",
    contentSnippet:
      "Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.",
  },
  {
    category: "Res",
    date: new Date("2023-04-11T09:12:30.000Z"),
    link: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
    id: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
    title: "Allt du vill veta om din tågsemester i Europa",
    content:
      "<img src='https://static.cdn-expressen.se/images/9c/9d/9c9d2ca6dc9e4c69899be073c4d618f4/16x9/265@70.jpg'/><p>Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.</p>",
    contentSnippet:
      "Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.",
  },
];

const mockDateSortedList = [
  {
    category: "Res",
    date: new Date("2023-04-14T09:12:30.000Z"),
    link: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
    id: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
    title: "Allt du vill veta om din tågsemester i Europa",
    content:
      "<img src='https://static.cdn-expressen.se/images/9c/9d/9c9d2ca6dc9e4c69899be073c4d618f4/16x9/265@70.jpg'/><p>Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.</p>",
    contentSnippet:
      "Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.",
  },
  {
    category: "Res",
    date: new Date("2023-04-11T09:12:30.000Z"),
    link: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
    id: "https://www.expressen.se/allt-om-resor/tagresor/allt-du-vill-veta-om-din-tagsemester-i-europa/",
    title: "Allt du vill veta om din tågsemester i Europa",
    content:
      "<img src='https://static.cdn-expressen.se/images/9c/9d/9c9d2ca6dc9e4c69899be073c4d618f4/16x9/265@70.jpg'/><p>Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.</p>",
    contentSnippet:
      "Vilket land i Europa är det bäst att tågluffa i? Är det något område man bör undvika? Och var ligger de vackraste tågsträckorna? Journalisten Anna W Thorbjörnsson, som tillsammans med Marko T Wramén är aktuell med boken ”NYA Med tåg genom Europa”, svarade på läsarnas frågor.",
  },
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

describe("sortNewsOnDates tests", () => {
  it("should sort articles based on a filtered list of objects", () =>
    expect(sortNewsOnDates(mockFilteredObjectsList)).toEqual(
      mockDateSortedList
    ));
});
