const getSum = arr => {
  return arr.reduce((accumluator, currentValue) => {
    return accumluator + currentValue;
  }, 0);
};

export default getSum;
