#!/usr/bin/env node
import BSTNode from './node.js'
export default class BST {
    root = null
    constructor(){}
    insert(key, value){
        var node = new BSTNode(key, value)
        if (this.root == null)
            this.root = node
        else 
            insertNode(this.root, node)
        
        function insertNode(current, node){
            if(node.key < current.key){
                if(current.left == null)
                    current.left = node
                else 
                    insertNode(current.left, node)
            } else {
                if (current.right == null)
                    current.right = node
                else 
                    insertNode(current.right, node)
            } 
        }
    }
    traversePreorder() {
        return this.preOrder(this.root)
    }
    traverse(type){
        switch(type){
            case 'preOrder': { return this.preOrder(this.root); break}
            case 'postOrder': {return this.postOrder(this.root); break}
            case 'breathFirst': {return this.breathFist(this.root); break}
            default: {return this.inOrder(this.root); break}
        }
    }
    
    *breathFist(root){
        var queue=[]
        var current = root
        while(current != null) {
            yield current
            if (current.left != null)
                queue.push(current.left)
            if (current.right != null)
                queue.push(current.right)
            if(queue.length > 0) {
                current = queue.shift()
            }
            else
                current = null
        }
    }
    *preOrder(root, level = 0){
        if (root != null) {
            yield {...root, height: level}
            if (root.left != null) {
                // for(let left of preorder(root.left))
                //     yield left
                yield* this.preOrder(root.left, level + 1)
            }
            if (root.right != null) {
                // for (let right of preorder(root.right))
                //     yield right
                yield* this.preOrder(root.right, level + 1)
            }
        }
    }
    getHeight() {
        var maxHeight = 0
        for (let node of this.preOrder(this.root, 0)){
            maxHeight = maxHeight < node.height ? node.height : maxHeight
        }
        return maxHeight
    }
    getSmallest() {
        var current = this.root
        if (current == null) return null
        
        while(current.left != null)
            current = current.left
        return current
    }
    getLargest() {
        var current = this.root
        if (current == null) return null
        
        while(current.right != null)
            current = current.right
        return current
    }



    *postOrder(root){
        if (root != null) {
            if (root.left != null) {
                yield* this.postOrder(root.left)
            }
            if (root.right != null) {
                yield* this.postOrder(root.right)
            }
            yield root
        }
    }
    // ascending orderly
    *inOrder(root){
        if (root != null) {
            if (root.left != null) {
                yield* this.inOrder(root.left)
            }
            yield root
            if (root.right != null) {
                yield* this.inOrder(root.right)
            }
        }
    }



}