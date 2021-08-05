// 1
export default function binarySearchIterative() {
  const input = [1, 4, 5, 6, 7, 8, 12, 30, 45, 78, 567];
  const searchElement = 567; // 78
  let low = 0;
  let high = input.length;
  while (low < high) {
    const index = parseInt((high + low) / 2);
    if (input[index] === searchElement) {
      console.log(index);
      return index;
    } else if (input[index] > searchElement) {
      high = index;
    } else {
      low = index + 1;
    }
  }
  console.log(-1);
}

// 2
export function binarySearchRecursive() {
  const input = [1, 4, 5, 6, 7, 8, 12, 30, 45, 78, 567];
  callbyRecursively(0, input.length - 1, input, 567);
}

function callbyRecursively(low, high, input, searchElement) {
  if (low > high) {
    console.log(-1);
    return -1;
  } else {
    if (input[parseInt((high + low) / 2)] === searchElement) {
      // console.log(input[parseInt((high + low) / 2)]);
      console.log(parseInt((high + low) / 2));
      return parseInt((high + low) / 2);
    } else if (input[parseInt((high + low) / 2)] > searchElement) {
      return callbyRecursively(
        0,
        parseInt((high + low) / 2),
        input,
        searchElement
      );
    } else {
      return callbyRecursively(
        parseInt((high + low) / 2) + 1,
        high,
        input,
        searchElement
      );
    }
  }
}

// 3
export function findFirstIndexBinarySearchIterative(input, searchElement) {
  // const input = [5, 10, 20, 20, 20, 20, 20];
  // const searchElement = 20;
  let low = 0;
  let high = input.length - 1;
  while (low <= high) {
    const mid = parseInt((high + low) / 2);
    if (input[mid] > searchElement) {
      high = mid;
    } else if (input[mid] < searchElement) {
      low = mid + 1;
    } else {
      // tricky
      if (mid === 0 || input[mid - 1] !== input[mid]) {
        console.log(mid);
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
  console.log(-1);
  return -1;
}

// 4
export function findLastIndexBinarySearchIterative(input, searchElement) {
  // const input = [5, 10, 20, 20, 20, 20, 20];
  // const searchElement = 20;
  let low = 0;
  let high = input.length - 1;
  while (low <= high) {
    const mid = parseInt((high + low) / 2);
    if (input[mid] > searchElement) {
      high = mid;
    } else if (input[mid] < searchElement) {
      low = mid + 1;
    } else {
      // tricky
      if (mid === input.length - 1 || input[mid + 1] !== input[mid]) {
        console.log(mid);
        return mid;
      } else {
        // high = mid - 1;
        low = mid + 1;
      }
    }
  }
  console.log(-1);
  return -1;
}

// 5
export function CountOccuranceBinarySearchIterative() {
  const input = [5, 10, 20, 20, 20, 20, 20];
  const firstIndex = findFirstIndexBinarySearchIterative(input, 20);
  const lastIndex = findLastIndexBinarySearchIterative(input, 20);
  if (firstIndex === -1 || lastIndex === -1) {
    return 0;
  } else {
    console.log('occurance - ', lastIndex - firstIndex + 1);
  }
}

// 6 count 1's in sorted binary array
export function countOccuranceOf1sInSortedBinaryArray() {
  const input = [0, 0, 0, 1, 1, 1, 1, 1];
  const firstIndex = findFirstIndexBinarySearchIterative(input, 1);
  const lastIndex = findLastIndexBinarySearchIterative(input, 1);
  if (firstIndex === -1 || lastIndex === -1) {
    return 0;
  } else {
    console.log('occurance - ', lastIndex - firstIndex + 1);
  }
}

// 7 - Alternative method -  count 1's in sorted binary array
export function countOccuranceOf1sInSortedBinaryArray1() {
  const input = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
  let low = 0;
  let high = input.length - 1;
  while (low <= high) {
    const mid = parseInt((high + low) / 2);
    if (input[mid] === 0) {
      low = mid + 1;
    } else {
      if (mid === 0 || input[mid - 1] === 0) {
        console.log(input.length - mid);
        return input.length - mid;
      } else {
        // tricky
        high = mid - 1;
      }
    }
  }
  return 0;
}
