"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  if (!array.length || target === null || target === undefined) return false;

  // const halfIndex = Math.floor(array.length - 1 / 2);
  // const value = array[halfIndex];

  // if (value === target) return true;
  // else if (value < target) {
  //   if (halfIndex === array.length - 1) return false;
  //   else return binarySearch(array.slice(halfIndex + 1), target);
  // } else if (value > target) {
  //   if (halfIndex === 0) return false;
  //   else return binarySearch(array.slice(0, halfIndex), target);
  // }
  let index;
  let endIndex = array.length - 1;
  let startIndex = 0;

  while (index !== endIndex && index !== startIndex) {
    index = Math.floor((endIndex + startIndex) / 2);

    if (array[index] === target) return true;

    if (array[index] < target) startIndex = index + 1;
    else endIndex = index - 1;
  }

  return false;
};

// const binarySearch = (array, target, left = 0, right = array.length) => {
// 	let toCheck = Math.floor((left + right) / 2 );
// 	if(right < left){
// 		return false
// 	}
// 	if(array[toCheck] === target){
// 		return true
// 	} else if(array[toCheck] > target){
// 		right = toCheck - 1
// 		return binarySearch(array, target, left, right);
// 	} else {
// 		left = toCheck + 1
// 		return binarySearch(array, target, left, right);
// 	}
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
