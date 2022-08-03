const attributesJoinDataFn = (responseData, joinField) => {
  let joinArr = []; //temp
  let joinData = {}; //temp
  responseData.forEach((item) => {
    joinArr.push(item[joinField]);
    item[joinField] = {};
    joinData = item;
  });
  joinData[joinField] = joinArr;
  return joinData;
};

module.exports = {
  attributesJoinDataFn,
};
