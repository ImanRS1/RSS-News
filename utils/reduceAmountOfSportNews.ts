import { rssData } from "../interfaces/rssData.interface";

export default function reduceAmountOfSportNews(newsArray: rssData[]) {
  let count = 0;

  return newsArray.filter((newsObject) => {
    if (newsObject.category === "Sport" && count < 3) {
      count++;
      return newsObject;
    } else {
      if (newsObject.category !== "Sport") return newsObject;
    }
    return;
  });
}
