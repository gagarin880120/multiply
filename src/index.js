module.exports = function multiply(first, second) {
  const firstArr = first.split('').reverse();
  const secondArr = second.split('').reverse();

  const resultArr = [];

  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      let multi = firstArr[i] * secondArr[j];
      resultArr[i + j] = (resultArr[i + j]) ? resultArr[i + j] + multi : multi;
    }
  }

  for (let i = 0; i < resultArr.length; i++) {
    let num = resultArr[i] % 10;
    let move = Math.floor(resultArr[i] / 10);
    resultArr[i] = num;

    if (resultArr[i + 1])
      resultArr[i + 1] += move;
    else if (move != 0)
      resultArr[i + 1] = move;
  }
  return resultArr.reverse().join('');
}