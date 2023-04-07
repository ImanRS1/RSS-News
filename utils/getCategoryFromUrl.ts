import urlNames from "./urlEnum";

export default function getCategoryFromUrl(url: string) {
  const urlEnd = `${url.split("/").at(-1)}`;
  return urlNames[urlEnd as keyof object];
}
