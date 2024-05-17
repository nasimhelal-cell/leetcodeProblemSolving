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
var deleteDuplicates = function (head) {
  // If the list is empty or has only one node, return the head
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      // Skip the next node since it is a duplicate
      current.next = current.next.next;
    } else {
      // Move to the next node if it is not a duplicate
      current = current.next;
    }
  }

  return head;
};
