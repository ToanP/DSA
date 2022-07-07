#!/usr/bin/env node
export default class Node {
    left = null
    right = null
    constructor(key, value){
        this.key = key
        this.value = value
    }
     equalWithNode(node){
        return this.key == node.key ? true : false
    }
    equalWithKey(key){
        return this.key == key ? true : false
    }
    equalWith(obj){
        if (obj instanceof Node)
            return this.key == obj.key ? true : false
        else {
            let key = obj
            return this.key == key ? true : false
        }
            
    }
    
}