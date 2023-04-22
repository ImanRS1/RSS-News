import axios from "axios";

export default async function fetchRssData(
  urlArray: string[],
  totalFetch?: boolean
) {
  if (typeof window !== "undefined") {
    return await axios.post(`http://${window.location.host}/api/getRssData`, {
      urlArray,
      totalFetch,
    });
  }
}
