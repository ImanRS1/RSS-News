import parseDate from "../../utils/parseDate";

describe("parseDate", () => {
  it("should format past date correctly", () => {
    const inputDate = "2022-05-12T10:30:00";
    const expectedOutput = "12 maj, 10:30";

    const formattedDate = parseDate(inputDate);

    expect(formattedDate).toBe(expectedOutput);
  });

  it("should format today's date correctly", () => {
    const today = new Date().toISOString().slice(0, 10);
    const currentTime = new Date().toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const inputDate = `${today}T${currentTime}`;
    const expectedOutput = `Idag ${currentTime}`;

    const formattedDate = parseDate(inputDate);

    expect(formattedDate).toBe(expectedOutput);
  });

  it("should return an empty string for future date", () => {
    const inputDate = "2099-09-30T15:00:00";
    const expectedOutput = "";

    const formattedDate = parseDate(inputDate);

    expect(formattedDate).toBe(expectedOutput);
  });
});
