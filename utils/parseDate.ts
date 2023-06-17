export default function parseDate(date: string) {
  const today = new Date().setHours(0, 0, 0, 0);
  const incoming = new Date(date).setHours(0, 0, 0, 0);

  const comparison = Math.sign(incoming - today);

  if (comparison === -1) {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
    };

    const formattedDate = new Date(date).toLocaleDateString("sv-SE", options);
    const formattedTime = date.slice(11, 16);

    return `${formattedDate}, ${formattedTime}`;
  } else if (comparison === 0) {
    return `Idag ${date.slice(11, 16)}`;
  }

  return "";
}
