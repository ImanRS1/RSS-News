export default function DateSorter(unsortedArray: any): any {
  const newAr: [] = unsortedArray.sort(
    (a: any, b: any) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );
  return newAr.slice(0, 10);
}
