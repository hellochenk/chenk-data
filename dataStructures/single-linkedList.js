// 链表

function Node(element) {
    this.element = element; // 保存节点的信息
    this.next = null
}

function LList() {
    this.header = new Node('header');

    this.find = find; // 查找特点节点
    this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    
} 

function find(item) {
    var currentNode = this.header;
    while (currentNode.element !== item) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currentNode = this.find(item);
    
    // 交换位置 将老节点的next放到新节点的next,同时将新节点设置为老节点的next
    newNode.next = currentNode.next;
    currentNode.next = newNode;
}

function display() {
    var currentNode = this.header;
    do {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    } while(!(currentNode.next == null))
//     while(!(currentNode.next == null)) {
//         console.log(currentNode.next.element, '/n');
//         currentNode = currentNode.next;
//     }
}

function findPrevious(item) {
    var currentNode = this.header;
    while(!(currentNode.next == null) && currentNode.next.element !== item) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function remove(item) {
    var previousNode = this.findPrevious(item);
    if(!(previousNode == null)) {
        previousNode.next = previousNode.next.next;
    }
}

// todo 双向链表



