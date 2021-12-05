let data = [
  122,
  22,
  333,
  1112,
  444,
  55,
  666,
  77,
  453,
  243,
  546,
  786,
  32,
  245,
  332,
  45,
  12,
  133,
  435,
  211,
  111,
  323,
  455,
  546,
  77,
  878,
  233,
  112,
  323,
  434,
  545,
  646,
  123,
  188,
  169
];

let getRandomArrayElements = (count = 5) => {
  var shuffled = data.slice(0),
    i = data.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
};

export default {
  // Utils.Public.TestData.getRandomArrayElements();
  getRandomArrayElements
};
