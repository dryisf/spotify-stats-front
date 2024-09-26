export const capitalizeEachWord = (text: string) =>
  text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
