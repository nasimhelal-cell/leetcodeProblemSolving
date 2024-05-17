/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // Handle the case where the head node itself needs to be removed
  while (head !== null && head.val === val) {
    head = head.next;
  }

  // If the list is empty after removing nodes
  if (head === null) return head;

  // Initialize current node as the head
  let current = head;

  // Traverse the list
  while (current !== null && current.next !== null) {
    if (current.next.val === val) {
      // Skip the node with the value to remove
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  // Return the new head
  return head;
};
