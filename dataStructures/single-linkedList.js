// 链表节点
class Node {
    constructor(element) {
        this.element = element; // 保存节点的信息
        this.next = null
    }
}

// 单链表
class SingleList {
    constructor() {
        this.header = new Node('header')
    }
    
    find(item) {
        var currentNode = this.header;
        while (currentNode.element !== item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(newElement, item) {
        var newNode = new Node(newElement);
        var currentNode = this.find(item);

        // 交换位置 将老节点的next放到新节点的next,同时将新节点设置为老节点的next
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    display() {
        var currentNode = this.header;
        while(!(currentNode.next == null)) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next;
        };
    }

    findPrevious(item) {
        var currentNode = this.header;
        while(!(currentNode.next == null) && currentNode.next.element !== item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    remove(item) {
        var previousNode = this.findPrevious(item);
        if(!(previousNode == null)) {
            previousNode.next = previousNode.next.next;
        }
    }
}

// 双向链表
class DoubleNode{
    constructor(element) {
        this.element = element; // 保存节点的信息
        this.next = null;
        this.previous = null;
    }
}

class DoubleList {
    constructor() {
        this.header = new DoubleNode('header');
    }
    
    find(item) {
        var currentNode = this.header;
        while (currentNode.element !== item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    
    findLast() {
        let currentNode = this.header;

        while(!(currentNode == null) && !(currentNode.next == null)) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    
    insert(newElement, item) {
        var newNode = new DoubleNode(newElement);
        var currentNode = this.find(item);

        newNode.next = currentNode.next;
        newNode.previous = currentNode;
        currentNode.next = newNode;
    }
    
    remove(item) {
    //     var previousNode = this.findPrevious(item);
        const currentNode = this.find(item);
        if(!(currentNode.next == null)) {
    //         previousNode.next = previousNode.next.next;
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;

            currentNode.previous = null;
            currentNode.next = null;
        }
    }
    
    display() {
        var currentNode = this.header;
        while(!(currentNode.next == null)) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next
        }
    }

    displayReverse() {
        var currentNode = this.findLast();
        while(!(currentNode.previous == null)) {
            console.log(currentNode.element);
            currentNode = currentNode.previous;
        }
    }
}








