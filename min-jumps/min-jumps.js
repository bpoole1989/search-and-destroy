"use strict";

// Complete this algo
const minJumps = (arr) => {
  if (arr[0] >= arr.length - 1) return 1;

  let priorIndex = -1;

  for (let i = arr.length - 2; i > 0; i--) {
    if (arr[i] >= arr.length - i - 1) priorIndex = i;
  }

  return 1 + minJumps(arr.slice(0, priorIndex + 1));

  // let jumps = arr.map(el => Infinity)
  // jumps[0] = 0;

  // for(let i = 1; i < jumps.length; i++){
  // 	for(let j = 0; j <= i; j++){
  // 		if(j + arr[j] >= i) {
  // 			jumps[i] = Math.min(jumps[i], jumps[j] + 1)
  // 		}
  // 	}
  // }
  // return jumps[arr.length - 1];
};

module.exports = minJumps;
