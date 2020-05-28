"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  let node1 = linkedlist.head;
  let node2 = node1.next;

  while (node2 !== null) {
    node1 = linkedlist.head;

    while (node1 !== node2) {
      if (node2.next === node1) return true;
      else node1 = node1.next;
    }

    node2 = node2.next;
  }

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
