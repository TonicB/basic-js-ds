const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  function removeAt(l, pos) {
    if(pos < 0) {
      return null
    }
    
    let current = l

    if(pos === 0) {
      l = current.next
    } else {
      let prev = null
      let index = 0
      
      while (index < pos) {
        prev = current
        current = current.next
        index++
      }

      prev.next = current.next
    
    }
    return l
  }

  function indexOf(e) {
    let current = l
    let index = 0
    let indexArr = []
    
    while (current) {
      if (current.value === e) {
        indexArr.push(index)
        // return index
      }
      
      current = current.next
      index++
    }
      return indexArr
  }

  return indexOf(k).reduce((acc, x, i) => removeAt(acc, (x-i)), l)
}

module.exports = {
  removeKFromList
};
