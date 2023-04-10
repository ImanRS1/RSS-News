import "@testing-library/jest-dom";
import getCategoryFromUrl from "../../utils/getCategoryFromUrl";

describe("getCategoryFromUrl tests", () => {
  it("should get the end part of the example url and match it to our urlEnum", () => {
    expect(getCategoryFromUrl("http://expressen.se/rss/debatt")).toEqual(
      "Debatt"
    );
  });

  it("should fail given an example url that does not match our urlEnum", () => {
    expect(getCategoryFromUrl("http://expressen.se/rss/deb")).toBeUndefined();
  });
});
