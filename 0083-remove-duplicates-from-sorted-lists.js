/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// sol 2 -> improvement from sol 1 -> which uses more space and slower because it has to create a new ListNode every single time, try improvement by modifying and unlinking the list from function parameter
var deleteDuplicates = function (head) {
  let curr = head;
  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) curr.next = curr.next.next;
    else curr = curr.next;
  }

  return head;
};

// sol 1 -> this should be a simple  single linked list implementation
var deleteDuplicates = function (head) {
  let currentNumber = -1000;
  let res = new ListNode(0);
  let tail = res;

  while (head != null) {
    if (head.val != currentNumber) {
      tail.next = new ListNode(head.val);
      currentNumber = head.val;
      tail = tail.next;
    }
    head = head.next;
  }
  return res.next;
};
