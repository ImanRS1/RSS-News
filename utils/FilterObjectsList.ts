export default function FilterObjectsList(objectsList: any): any {
  return objectsList.items.map((item: any) => {
    return {
      date: item.isoDate,
      link: item.link,
      id: item.guid,
      title: item.title,
    };
  });
}
