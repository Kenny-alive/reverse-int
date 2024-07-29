module.exports = function reverse(n) {
  const absValue = Math.abs(n)
  const nArr = absValue.toString().split('');
  const result = [];
  for (let i = nArr.length - 1; i >= 0; i--) {
    result.push(nArr[i])
  }
  return result.join('');
}
