"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  const halfIndex = Math.floor(array.length - 1 / 2);
  const value = array[halfIndex];

  if (value === target) return true;
  else if (value < target) {
    if (halfIndex === array.length - 1) return false;
    else return binarySearch(array.slice(halfIndex + 1), target);
  } else if (value > target) {
    if (halfIndex === 0) return false;
    else return binarySearch(array.slice(0, halfIndex), target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
