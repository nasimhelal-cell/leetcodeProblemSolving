/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = head,
    slow = head;

  // Find the middle of the linked list
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the first half and the reversed second half
  let p1 = head,
    p2 = prev;
  while (p2) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};
