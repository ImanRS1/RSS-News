export default function Theme() {
  return {
    black1: "#303030",
    grey1: "#fefefe",
    grey2: "#e8e8e8",
    grey3: "#EDEDF0",
    grey4: "#BDBDBD",
    grey5: "#FBFBFB",
    grey6: "#DBDCE1",
    black45: "rgba(0, 0, 0, 0.45)",
    black65: "rgba(0, 0, 0, 0.65)",
    black85: "rgba(0, 0, 0, 0.85)",
    blue1: "#006FFF",
    breakpoints: {
      smallMobile: "@media (max-width: 550px)",
      mobile: "@media (max-width: 767px)",
      tablet: "@media (min-width: 768px) and (max-width: 1024px)",
      desktop: "@media (min-width: 1025px)",
      productsViewBreak: "@media (max-width: 1310px)",
      mobileAndTablet: "@media (max-width: 1024px)",
      tabletAndDesktop: "@media (min-width: 768px)",
    },
  };
}
