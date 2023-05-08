import parse from "html-react-parser";

export default function parseContentImage(content: string) {
  const parsedContent: any = parse(content);

  if (parsedContent[0]?.type === "img") return parsedContent[0];
}
