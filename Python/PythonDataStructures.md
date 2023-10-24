# Data Structures in Python

## Single Linked List

(Monday, August 10, 2020, 22:04)

```python
class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

    def __repr__(self):
        return repr(self.data)

class SingleList:
    def __init__(self):
        self.head = None

    def __repr__(self):
        """
        Return a string representation of the list.
        Takes O(n) time.
        """
        nodes = []
        curr = self.head
        while curr:
            nodes.append(repr(curr))
            curr = curr.next
        return '[' + ', '.join(nodes) + ']'

    def prepend(self, data):
        """
        Insert a new element at the beginning of the list.
        Takes O(1) time.
        """
        self.head = Node(data=data, next=self.head)

    def append(self, data):
        """
        Insert a new element at the end of the list.
        Takes O(n) time.
        """
        if not self.head:
            self.head = Node(data)
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = Node(data)

    def index(self, key_data):
        """
        Search for the first element with 'data' matching
        `key_data` and return the index.
        Takes O(n) time.
        """
        curr = self.head
        curr_idx = 0
        while curr and curr.data != key_data:
            curr = curr.next
            curr_idx += 1
        if curr is None:
            raise ValueError("{} is not in SingleList".format(repr(key_data)))
        return curr_idx

    def __len__(self):
        if not self.head:
            return 0
        curr = self.head
        total = 1
        while curr.next:
            total += 1
            curr = curr.next
        return total

    def __getitem__(self, index):
        """
        Grab the element(data) at the specified index.
        """
        if index >= len(self):
            raise IndexError("SingleList index out of range")
        curr_idx = 0
        curr = self.head
        while curr and curr_idx != index:
            curr = curr.next
            curr_idx += 1
        return curr.data

    def remove(self, key):
        """
        Remove the first occurrence of data `key` in the list.
        Takes O(n) time.
        """
        # Find the element and keep a
        # reference to the element preceding it
        curr = self.head
        prev = None
        while curr and curr.data != key:
            prev = curr
            curr = curr.next
        # Unlink it from the list
        if prev is None:
            self.head = curr.next
        elif curr:
            prev.next = curr.next
            curr.next = None

    def reverse(self):
        """
        Reverse the list in-place.
        Takes O(n) time.
        """
        curr = self.head
        prev_node = None
        next_node = None
        while curr:
            next_node = curr.next
            curr.next = prev_node
            prev_node = curr
            curr = next_node
        self.head = prev_node


def main():
    lista = SingleList()
    lista.append(1)
    lista.append(2)
    lista.append('Ana')
    lista.append(4)
    lista.append([2, 1])
    print(lista)

    lista.reverse()
    print(lista)
    print(lista[2])


if __name__ == '__main__':
    main()
```

<br/>

## Double Linked List

```python
class Node:
    def __init__(self, data=None, next=None, prev=None):
        self.data = data
        self.next = next
        self.prev = prev

    def __repr__(self):
        return repr(self.data)

class DoublyList:
    def __init__(self):
        self.head = None
        # self.tail = None # De implementat

    def __repr__(self):
        """
        Return a string representation of the list.
        Takes O(n) time.
        """
        nodes = []
        curr = self.head
        while curr:
            nodes.append(repr(curr))
            curr = curr.next
        return '[' + ', '.join(nodes) + ']'

    def prepend(self, data):
        """
        Insert a new element at the beginning of the list.
        Takes O(1) time.
        """
        self.head = Node(data=data, next=self.head, prev=None)

        # Change prev of head node to new node
        if self.head is not None:
            self.head.prev = self.head

    def append(self, data):
        """
        Insert a new element at the end of the list.
        Takes O(n) time.
        """
        if self.head is None:
            self.head = Node(data)
            return

        curr_node = self.head
        while curr_node.next:
            curr_node = curr_node.next
        curr_node.next = Node(data)
        curr_node.prev = curr_node

    def insertAfter(self, index, data):
        if self.head is None:
            self.head = Node(data)
            return

        if index >= len(self):
            self.append(data)

        elif index >= 0:
            new_node = Node(data)
            curr_node = self.head
            curr_idx = 0
            while curr_node.next != self.head and curr_idx < index:
                curr_node = curr_node.next
                curr_idx += 1
            new_node.next = curr_node.next
            curr_node.next = new_node
            new_node.prev = curr_node

        else:
            raise IndexError("Negative index!")

    def __len__(self):
        if not self.head:
            return 0
        curr = self.head
        total = 1
        while curr.next:
            total += 1
            curr = curr.next
        return total

    def __iter__(self):
        curr = self.head
        while curr:
            yield curr
            curr = curr.next
            if curr == self.head:
                break

    def __getitem__(self, index):
        if index >= len(self) or -index > len(self):
            raise IndexError("CircularList index out of range")

        elif index >= 0:
            curr_idx = 0
            curr = self.head
            while curr.next != self.head and curr_idx != index % len(self):
                curr = curr.next
                curr_idx += 1
            return curr.data

        elif index < 0:
            curr_idx = 0
            curr = self.head
            while curr.next != self.head and curr_idx != (len(self) + index) % len(self):
                curr = curr.next
                curr_idx += 1
            return curr.data

    def index(self, key_data):
        """
        Search for the first element with 'data' matching
        `key_data` and return the index.
        Takes O(n) time.
        """
        curr = self.head
        curr_idx = 0
        while curr and curr.data != key_data:
            curr = curr.next
            curr_idx += 1
        if curr is None:
            raise ValueError("{} is not in List".format(repr(key_data)))
        return curr_idx

def main():
    lista = DoublyList()
    lista.prepend(5)
    lista.prepend(4)

    lista.append(6)
    lista.prepend(3)
    lista.append(7)

    print(lista)

    lista.insertAfter(index=0, data=20)
    lista.insertAfter(index=2, data=21)

    print(lista)

    x = iter(lista)
    for _ in range(2):
        print(next(x))

    print(lista[-1])

    print(lista.index(7))


if __name__ == '__main__':
    main()
```

<br/>

## Circular Linked List

```python
# Lists_Circular_Linked.py
class Node:
	def __init__(self, data):
		self.data = data
		self.next = None

	def __repr__(self):
		return repr(self.data)

class CircularList:
	def __init__(self):
		self.head = None

	def __repr__(self):
		nodes = []
		curr = self.head
		while curr:
			nodes.append(repr(curr))
			curr = curr.next
			if curr == self.head:
				break
		return "[{}]".format(", ".join(nodes))

	def __iter__(self):
		curr = self.head
		while curr:
			yield curr
			curr = curr.next
			# if curr == self.head:
			# 	break
			# # (RO) Atentie: se parcurge la infinit fara conditie de stop

	def __len__(self):
		curr = self.head
		count = 0
		while curr:
			count += 1
			curr = curr.next
			if curr == self.head:
				break
		return count

	def __getitem__(self, index):
		# if index >= len(self) or -index > len(self):
		# 	raise IndexError("CircularList index out of range :(")
		# # (RO) Fiind o lista circulara, indexul poate depasi lungimea :)
		if index >= 0:
			curr_idx = 0
			curr = self.head
			while curr.next != self.head and curr_idx != index % len(self):
				curr = curr.next
				curr_idx += 1
			return curr.data
		else:
			curr_idx = 0
			curr = self.head
			while curr.next != self.head and curr_idx != (len(self) + index) % len(self):
				curr = curr.next
				curr_idx += 1
			return curr.data

	def __add__(self, other_list):
		''' Concate with another circular list or with Python's default list '''
		return '...to be implemented'

	def append(self, data):
		if not self.head:
			self.head = Node(data)
			self.head.next = self.head
		else:
			new_node = Node(data)
			curr = self.head
			while curr.next != self.head:
				curr = curr.next
			curr.next = new_node
			new_node.next = self.head

	def prepend(self, data):
		new_node = Node(data)
		curr = self.head
		new_node.next = self.head
		if not self.head:
			new_node.next = new_node
		else:
			while curr.next != self.head:
				curr = curr.next
			curr.next = new_node
		self.head = new_node

	def remove(self, key_data):
		if self.head is None:
			raise ValueError("CircularList.remove(x): list is empty :(\n")

		elif self.head == self.head.next and self.head.data == key_data:
			self.head = None

		elif self.head.data == key_data:
			curr = self.head
			while curr.next != self.head:
				curr = curr.next
			curr.next = self.head.next
			self.head = self.head.next

		else:
			curr = self.head
			prev = None
			while curr.next != self.head and curr.next.data != key_data:
				curr = curr.next
			if curr.next.data == key_data:
				prev = curr.next
				curr.next = prev.next
			else:
				raise ValueError("CircularList.remove(x): x not in list :(\n")

	def isCircularList(self, input_list):
		''' Return True if the current list is a circular list or not.'''
		curr = input_list.head
		while curr.next:
			curr = curr.next
			if curr.next == input_list.head:
				return True
		return False

def main():
	lista = CircularList()
	lista.append("B")
	lista.prepend("A")
	lista.append("C")
	lista.append("D")
	lista.prepend("ugh")

	print(lista)
	lista.remove("ugh")

	x = iter(lista)
	for _ in range(7):
		print(next(x))

	print(lista)
	print(len(lista))
	print(lista[len(lista) + 45])
	print(lista[-99])
	print()


if __name__ == '__main__':
	main()
```

<br/>

## Binary Tree

(Friday, March 27, 2020, 16:09)

```python
class Node:
	def __init__(self, value):
		self.value = value
		self.left = None
		self.right = None
	def __repr__(self):
		return repr(self.value)

class BinaryTree:
	def __init__(self, root):
		self.root = Node(root)

	def __repr__(self):
		return repr(self.preorder_list(self.root, []))

	def print_tree(self, traversal_type):
		if traversal_type == "preorder":
			print(self.preorder_list(self.root, []))
		elif traversal_type == "inorder":
			print(self.inorder_list(self.root, []))
		elif traversal_type == "postorder":
			print(self.postorder_list(self.root, []))

	def preorder_list(self, start, traversal):
		''' Root->Left->Right '''
		# start = node update on every recursive call
		# traversal = list with values of tree in preorder
		if start:
			traversal.append(start.value)
			traversal = self.preorder_list(start.left, traversal)
			traversal = self.preorder_list(start.right, traversal)
		return traversal

	def inorder_list(self, start, traversal):
		''' Left->Root->Right '''
		if start:
			traversal = self.inorder_list(start.left, traversal)
			traversal.append(start.value)
			traversal = self.inorder_list(start.right, traversal)
		return traversal

	def postorder_list(self, start, traversal):
		''' Left->Right->Root '''
		if start:
			traversal = self.postorder_list(start.left, traversal)
			traversal = self.postorder_list(start.right, traversal)
			traversal.append(start.value)
		return traversal


tree = BinaryTree(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)
tree.root.right.left = Node(6)
tree.root.right.right = Node(7)

# print(tree.preorder_list(tree.root, []))
tree.print_tree("preorder")
tree.print_tree("inorder")
tree.print_tree("postorder")


tree2 = BinaryTree('F')
tree2.root.left = Node('B')
tree2.root.right = Node('G')
tree2.root.left.left = Node('A')
tree2.root.left.right = Node('D')
tree2.root.left.right.left = Node('C')
tree2.root.left.right.right = Node('E')
tree2.root.right.right = Node('I')
tree2.root.right.right.left = Node('H')

tree2.print_tree('postorder')
```
