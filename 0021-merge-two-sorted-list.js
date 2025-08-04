/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// sol2 -> Optimization of Sol 1
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(-1);

  let tail = head;
  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  return head.next;
};

// sol1
var mergeTwoLists = function (list1, list2) {
  function pushTail(head, tail, val) {
    if (head == null) {
      head = new ListNode(val);
      tail = head;
    } else {
      tail.next = new ListNode(val);
      tail = tail.next;
    }
    return [head, tail];
  }
  let head = null;
  let tail = null;
  if (!list1 && !list2) return head;
  while (list1 != null || list2 != null) {
    if (list1 == null) {
      [head, tail] = pushTail(head, tail, list2.val);
      list2 = list2.next;
    } else if (list2 == null) {
      [head, tail] = pushTail(head, tail, list1.val);
      list1 = list1.next;
    } else {
      if (list1.val <= list2.val) {
        [head, tail] = pushTail(head, tail, list1.val);
        list1 = list1.next;
      } else {
        [head, tail] = pushTail(head, tail, list2.val);
        list2 = list2.next;
      }
    }
  }

  return head;
};

// var mergeTwoLists = function (list1, list2) {
//   //merging 2 sorted list into a new sorted list.
//   let resHead = null;
//   let tailPointer = null;
//   let curr = null;
//   while (list1 != null || list2 != null) {
//     if (list1.val <= list2.val) {
//       if (resHead == null) {
//         resHead = new ListNode(list1.val, null);
//         tailPointer = resHead;
//       } else {
//         tailPointer.next = new ListNode(list1.val, null);
//       }
//       list1 = list1.next;
//     } else {
//       if (resHead == null) {
//         resHead = new ListNode(list2.val, null);
//       } else {
//         curr = resHead;
//         while (curr.next != null) curr = curr.next;
//         curr.next = list2;
//       }
//       list2 = list2.next;
//     }
//   }
//   return resHead;
// };
