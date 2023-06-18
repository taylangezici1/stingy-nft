export const getStandardDeviation = (arr: number[]) => {
  const mean =
    arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / arr.length;

  arr = arr.map(k => {
    return (k - mean) ** 2;
  });

  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  return Math.sqrt(sum / arr.length);
};
