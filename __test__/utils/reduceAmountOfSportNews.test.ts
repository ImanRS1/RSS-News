import reduceAmountOfSportNews from "../../utils/reduceAmountOfSportNews";

describe("reduceAmountOfSportNews", () => {
  const newsArray = [
    {
      category: "Sport",
      date: new Date("2022-01-01"),
      link: "http://example.com/sport-news-1",
      id: "1",
      title: "Sport News 1",
      content: "Content of Sport News 1",
      contentSnippet: "Snippet of Sport News 1",
    },
    {
      category: "Technology",
      date: new Date("2022-01-02"),
      link: "http://example.com/tech-news-1",
      id: "2",
      title: "Tech News 1",
      content: "Content of Tech News 1",
      contentSnippet: "Snippet of Tech News 1",
    },
    {
      category: "Sport",
      date: new Date("2022-01-03"),
      link: "http://example.com/sport-news-2",
      id: "3",
      title: "Sport News 2",
      content: "Content of Sport News 2",
      contentSnippet: "Snippet of Sport News 2",
    },
    {
      category: "Sport",
      date: new Date("2022-01-04"),
      link: "http://example.com/sport-news-3",
      id: "4",
      title: "Sport News 3",
      content: "Content of Sport News 3",
      contentSnippet: "Snippet of Sport News 3",
    },
    {
      category: "Business",
      date: new Date("2022-01-05"),
      link: "http://example.com/business-news-1",
      id: "5",
      title: "Business News 1",
      content: "Content of Business News 1",
      contentSnippet: "Snippet of Business News 1",
    },
    {
      category: "Sport",
      date: new Date("2022-01-06"),
      link: "http://example.com/sport-news-4",
      id: "6",
      title: "Sport News 4",
      content: "Content of Sport News 4",
      contentSnippet: "Snippet of Sport News 4",
    },
  ];

  it("should reduce the number of sport news items to three or less", () => {
    const result = reduceAmountOfSportNews(newsArray);
    const sportNewsCount = result.filter(
      (news) => news.category === "Sport"
    ).length;
    expect(sportNewsCount).toBeLessThanOrEqual(3);
  });

  it("should preserve all non-sport news items", () => {
    const result = reduceAmountOfSportNews(newsArray);
    const nonSportNews = result.filter((news) => news.category !== "Sport");
    expect(nonSportNews).toEqual(
      expect.arrayContaining(
        newsArray.filter((news) => news.category !== "Sport")
      )
    );
  });

  it("should return an empty array if the input array is empty", () => {
    const result = reduceAmountOfSportNews([]);
    expect(result).toEqual([]);
  });

  it("should not modify the original input array", () => {
    const originalNewsArray = [...newsArray];
    reduceAmountOfSportNews(newsArray);
    expect(newsArray).toEqual(originalNewsArray);
  });
});
