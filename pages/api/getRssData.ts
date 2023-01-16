import type { NextApiRequest, NextApiResponse } from "next";
import RSSParser from "../../utils/RSSParser";

// type Data = {
//   status: string;
//   value: object;
// };

// value: {
//   items: Array<Object>;
//   image: Object;
//   title: string;
//   description: string;
//   managingEditor: string;
//   link: string;
//   copyright: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const urlArray: string[] = await req.body.urlArray;

  Promise.allSettled(
    urlArray.map(async (url) => {
      const feed = await RSSParser(url);
      return feed;
    })
  ).then((responseArr) => {
    return res.status(200).send(responseArr);
    // const responses = responseArr.map((res) => {
    //   console.log(res);

    // const dPublDate = /<dPublDate>(.*?)<\/dPublDate>/g.exec(
    //   res.value[3]
    // )[1];

    // return {
    //   status: res.value[0].CreateDeliveryReclaim_CIIResult,
    //   dPublDate: dPublDate,
    // };
    // });

    //return res.status(200).send(responses);
  });

  //res.status(200).send({ name: "hej från backend" });
}

// export default async function FeedHandler(url: string) {
//   const feed = await RSSParser(url);
//   const dateLinkIdTitle = FilterObjectsList(feed);
//   return DateSorter(dateLinkIdTitle);
// }
