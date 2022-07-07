#!/usr/bin/env node
import LinkedList from "../linkedList.js";

var list = new LinkedList()

list.append(2, "Two")
list.append(3, "Three")
list.append(4, "Four")
list.append(5, "Five")
list.append(6, "Six")

list.prepend(1, "One")
list.prepend(0, "Zero")

list.print()
console.log('------------------')
console.log(`List contains key=2 is ${list.contain(2)}`)
console.log(`List contains key=100 is ${list.contain(100)}`)

console.log('------------------')
console.log(`Remove key=99: ${list.remove(99)}`)
console.log(`Remove the head(0): ${list.remove(0)}`)
console.log(`Remove the tail(6): ${list.remove(6)}`)
console.log(`Remove a middle node(3): ${list.remove(3)}`)
list.print()
console.log('------------------')
for( let node of list.travese()) {
    console.log(`travese a node:(${node.key},${node.value})`)
}
for( let node of list.traveseReverse()) {
    console.log(`travese reversely a node:(${node.key},${node.value})`)
}




