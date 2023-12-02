class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


class LinkedList:
    def __init__(self, head):
        self.head = head
        self.current = None

    # Define Iterator
    def __iter__(self):
        self.current = self.head
        return self  # return a reference to the LinkedList

    # Iterate
    def __next__(self):
        # If our current pointer is not null,
        # return the value from list
        # and shift the current pointer
        if self.current:
            val = self.current.val
            self.current = self.current.next
            return val
        # If we reached the end of the linked list
        # we send the signal to stop iterating
        else:
            raise StopIteration


# Initialize LinkedList
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)

myList = LinkedList(head)
for n in myList:
    print(n)
