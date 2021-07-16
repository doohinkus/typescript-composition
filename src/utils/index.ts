export const dateStringtoDate = (dateString: string): Date => {
  let dateSegments = dateString
    .split("/")
    .map((value: string): number => parseInt(value));
  let year = dateSegments[2];
  let month = dateSegments[1] - 1;
  let day = dateSegments[0];
  return new Date(year, month, day);
};
