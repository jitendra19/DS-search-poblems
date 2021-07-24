export default function binarySearchIterative() {
  const input = [1, 4, 5, 6, 7, 8, 12, 30, 45, 78, 567];
  const searchElement = 78;
  let low = 0;
  let high = input.length - 1;
  while (parseInt((high - low) / 2) > 0) {
    // if (input[parseInt((high - low) / 2)] === searchElement) {
    //   console.log(parseInt((high - low) / 2));
    //   return parseInt((high - low) / 2);
    // } else if (input[parseInt((high - low) / 2)] > searchElement) {
    //   // console.log(parseInt((high - low) / 2));
    //   high = parseInt((high - low) / 2);
    // } else {
    //   console.log(parseInt((high - low) / 2));
    //   low = parseInt((high - low) / 2) + 1;
    // }
  }
}
