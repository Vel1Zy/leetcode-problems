/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

var addTwoNumbers = function(l1, l2){
    let answer = new ListNode();
    let curr = answer;
    let carry = 0;

    while(true){
        let value1 = 0;
        let value2 = 0;

        if(l1) value1 = l1.val;
        if(l2) value2 = l2.val;

        let sum = value1 + value2 + carry;
        
        if(sum>9) {
            carry = Math.floor(sum/10);
            sum = sum % 10;
        }else{
            carry = 0;
        }

        curr.next = new ListNode(sum);
        curr = curr.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;

        if(!l1 && !l2 && carry === 0) break;
    }

    return answer.next;
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    
    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = 0;
        let val2 = 0;
        
        if (l1 !== null) {
            val1 = l1.val;
        }
        
        if (l2 !== null) {
            val2 = l2.val;
        }
    
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    
        if (l1 !== null) {
            l1 = l1.next;
        }
        
        if (l2 !== null) {
            l2 = l2.next;
        }
    }
    
    return dummyHead.next;
};

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    
    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
    
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummyHead.next;
};

var addTwoNumbers = function(list1, list2) {
    const resultHead = new ListNode(0);
    let currentNode = resultHead;
    let carryOver = 0;
    
    const getValue = (node) => node ? node.val : 0;
    const moveNext = (node) => node ? node.next : null;
    
    while (list1 || list2 || carryOver) {
        const digit1 = getValue(list1);
        const digit2 = getValue(list2);
        const totalSum = digit1 + digit2 + carryOver;
        
        const newDigit = totalSum % 10;
        carryOver = Math.floor(totalSum / 10);
        
        currentNode.next = new ListNode(newDigit);
        currentNode = currentNode.next;
        
        list1 = moveNext(list1);
        list2 = moveNext(list2);
    }
    
    return resultHead.next;
};