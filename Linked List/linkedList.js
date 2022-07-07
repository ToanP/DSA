#!/usr/bin/env node
import Node from './node.js'

export default class LinkedList {
    head = null
    tail = null
    prepend(key, value) {
        var newNode = new Node(key, value)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }
    append(key, value) {
        var newNode = new Node(key, value)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }
    contain(key){
        var current = this.head
        while (current != null && current.equalWith(key) == false) {
            current = current.next
        }
        return current != null ? true: false
    }
    remove(key){
        if (this.head == null)
            return false
        var current = this.head
        if (current.equalWith(key)){
            if(this.head  == this.tail) {
                this.head = null
                this.tail = null
            } else
                this.head = this.head.next
            return true
        }
        while(current.next != null && false == current.next.equalWith(key))
            current = current.next
        if (current.next != null) {
            if (current.next == this.tail) {
                this.tail = current
                this.tail.next = null
            }
            else
                current.next = current.next.next
            return true
        }
        return false
    }
    *travese(){
        var current = this.head
        while(current != null) {
            yield current
            current = current.next
        }
    }
    *traveseReverse(){
        if (this.tail != null) {
            var current = this.tail
        while (current != this.head) {
            var prev = this.head
            while(false == prev.next.equalWith(current.key))
                prev = prev.next
            yield current
            current = prev
        }
        yield current
        }
        
    }
    print() {
        var node = this.head
        while(node != null) {
            console.log(`node:(${node.key}, ${node.value})`)
            node = node.next
        }
    }
    

}