import "@testing-library/jest-dom";
import parseContentImage from "../../utils/parseContentImage";

describe("parseContentImage tests", () => {
  it("should return the image element props given mockContent", () => {
    const mockContent =
      "<img src='https://static.cdn-expressen.se/images/4d/42/4d4209befee849eebfd73405fce68b93/16x9/265@70.jpg'/><p>LAHTIS/KALIX. Missnöjet var stort bland landslagsåkarna efter förra säsongens förhandlingar med skidförbundet.</p><p>Nu vill veteranen Calle Halfvarsson dubbla det nuvarande åkarbidraget på 200 000 kronor.&nbsp;</p><p>– Det är inte bra som det är nu. Vi vill ha förändring. En normal ”Svensson-lön”, säger Halfvarsson.</p>";

    expect(parseContentImage(mockContent).props).toEqual({
      src: "https://static.cdn-expressen.se/images/4d/42/4d4209befee849eebfd73405fce68b93/16x9/265@70.jpg",
      children: null,
    });
  });

  it("should only return the first image element when mockContent has two image elements", () => {
    const mockContent =
      "<img src='https://static.cdn-expressen.se/images/4d/42/4d4209befee849eebfd73405fce68b93/16x9/265@70.jpg'/><img src='https://1static.cdn-expressen.se/images/4d/42/4d4209befee849eebfd73405fce68b93/16x9/265@70.jpg'/><p>LAHTIS/KALIX. Missnöjet var stort bland landslagsåkarna efter förra säsongens förhandlingar med skidförbundet.</p><p>Nu vill veteranen Calle Halfvarsson dubbla det nuvarande åkarbidraget på 200 000 kronor.&nbsp;</p><p>– Det är inte bra som det är nu. Vi vill ha förändring. En normal ”Svensson-lön”, säger Halfvarsson.</p>";

    expect(parseContentImage(mockContent).props).toEqual({
      src: "https://static.cdn-expressen.se/images/4d/42/4d4209befee849eebfd73405fce68b93/16x9/265@70.jpg",
      children: null,
    });
  });

  it("should only return undefined when there are no image elements", () => {
    const mockContent =
      "<p>LAHTIS/KALIX. Missnöjet var stort bland landslagsåkarna efter förra säsongens förhandlingar med skidförbundet.</p><p>Nu vill veteranen Calle Halfvarsson dubbla det nuvarande åkarbidraget på 200 000 kronor.&nbsp;</p><p>– Det är inte bra som det är nu. Vi vill ha förändring. En normal ”Svensson-lön”, säger Halfvarsson.</p>";

    expect(parseContentImage(mockContent)?.props).toBeUndefined();
  });
});
