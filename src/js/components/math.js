const sumAll = (arr) => {
  return arr.reduce((prev, cur) => {
    return prev + parseFloat(cur.value);
  }, 0);
};
const avgIncome = (arr) => {
  const sum = sumAll(arr);
  const avg = sum / arr.length;
  return avg.toFixed(2);
};

export { sumAll, avgIncome };
