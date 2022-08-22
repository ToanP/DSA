import BST from '../BST.js'

var bst = new BST()

bst.insert(3,'Three')
bst.insert(10,'Ten')
bst.insert(4,'Four')
bst.insert(20,'Twenty')
bst.insert(21,'Twenty One')
bst.insert(9,'Nine')
bst.insert(7,'Seven')
bst.insert(15,'Fifteen')
bst.insert(16,'Sixteen')

// for(let node of bst.traversePreorder()){
//     console.log(`Node: ${node.key}, ${node.value}`)
// }

for(let node of bst.preOrder(bst.root, 0)){
    console.log(`Node: ${node.key}, ${node.value}, ${node.height}`)
}
// console.log('-------preOrder-----------')
// for(let node of bst.traverse('preOrder')){
//     console.log(`Node: ${node.key}, ${node.value}`)
// }
// console.log('-------postOrder-----------')
// for(let node of bst.traverse('postOrder')){
//     console.log(`Node: ${node.key}, ${node.value}`)
// }
// console.log('-------inOrder(ascending)-----------')
// for(let node of bst.traverse('inOrder')){
//     console.log(`Node: ${node.key}, ${node.value}`)
// }

// console.log('-------breathFirst-----------')
// for(let node of bst.traverse('breathFirst')){
//     console.log(`Node: ${node.key}, ${node.value}`)
// }

// console.log('-------breathFirst(show at each level)-----------')
// for(let node of bst.breathFist(bst.root)){
//     console.log(`Node: ${node.key}, ${node.value}`)
// }

// console.log('-------Tree" height-----------')
// console.log(`Tree's height = ${bst.getHeight()}`)

// console.log('-------Tree: smallest and largest-----------')
// console.log(`[smallest, largest] = (${bst.getSmallest().key}, ${bst.getLargest().key})`)

console.log('-------Contain-----------')
console.log(`Contain 15 ? ${bst.contain(15)}`)
console.log(`Contain 17 ? ${bst.contain(17)}`)