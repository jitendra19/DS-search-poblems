export default function binarySearchIterative() {
  const input = [1, 4, 5, 6, 7, 8, 12, 30, 45, 78, 567];
  const searchElement = 781; // 78
  let low = 0;
  let high = input.length - 1;
  while (low !== high) {
    if (input[parseInt((high + low) / 2)] === searchElement) {
      // console.log(input[parseInt((high + low) / 2)]);
      console.log(parseInt((high + low) / 2));
      return parseInt((high + low) / 2);
    } else if (input[parseInt((high + low) / 2)] > searchElement) {
      high = parseInt((high + low) / 2);
    } else {
      low = parseInt((high + low) / 2) + 1;
    }
  }
  console.log(-1);
}
