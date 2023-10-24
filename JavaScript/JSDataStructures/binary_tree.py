# Python 3.11.4 is currently installed through Windows Conda Envinronment (2023-10-24). However:
# DOES NOT WORK:
# conda install graphviz
# conda install python-graphviz
#
# WORKS:
# pip install graphviz
# Credits: https://levelup.gitconnected.com/binary-tree-implementation-and-visualization-in-python-2f4782887ca2
# https://graphviz.org/download/ -> graphviz-9.0.0 (32-bit) ZIP archive [sha256] (contains all tools and libraries)
# Dearchive graphviz.zip to path 'C:/Program Files (x86)/Graphviz/bin/'
#
# Run on Windows with:
# python .\binary_tree.py
import graphviz
import os
os.environ["PATH"] += os.pathsep + 'C:/Program Files (x86)/Graphviz/bin/'


class TreeNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None


def insert(root, key):
    if root is None:
        return TreeNode(key)
    else:
        if key < root.key:
            root.left = insert(root.left, key)
        else:
            root.right = insert(root.right, key)
    return root


def visualize_binary_tree(root):
    dot = graphviz.Digraph()
    dot.node(str(root.key))

    def add_nodes_edges(node):
        if node.left:
            dot.node(str(node.left.key))
            dot.edge(str(node.key), str(node.left.key))
            add_nodes_edges(node.left)
        if node.right:
            dot.node(str(node.right.key))
            dot.edge(str(node.key), str(node.right.key))
            add_nodes_edges(node.right)

    add_nodes_edges(root)
    dot.render('binary_tree', view=True, format='jpg')


# Example usage:
root = None
keys = [9, 4, 3, 6, 5, 7, 17, 10, 22, 20]
for key in keys:
    root = insert(root, key)

visualize_binary_tree(root)
