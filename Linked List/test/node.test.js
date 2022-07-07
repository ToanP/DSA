#!/usr/bin/env node
import Node from "../node.js";

var node = new Node(2, "two")
console.log(`Node is: (${node.key}, ${node.value})`)

var node1 = new Node(2, "hai")
console.log(`node == node1 is ${node.equalWithNode(node1)}`)

var node2 = new Node(3, "three")
console.log(`node == node2 is ${node.equalWith(node2)}`)