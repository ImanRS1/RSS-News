import Link from "next/link";
import getCategoryFromUrl from "../utils/getCategoryFromUrl";
import { usePathname } from "next/navigation";

const renderCategories = (url: string) => {
  const pathname = usePathname()?.split("/")[1];
  const urlEnd = `${url.split("/").at(-1)}`;

  return (
    <p className={pathname === urlEnd ? "active" : ""}>
      {getCategoryFromUrl(url)}
    </p>
  );
};

export const generateNavbarLinks = (urlArray: string[]) =>
  urlArray.map((url: string) => (
    <Link href={`${url.split("/").at(-1)}`} key={url}>
      {renderCategories(url)}
    </Link>
  ));
