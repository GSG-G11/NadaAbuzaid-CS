function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.push = function (val) {
  const newNode = new Node(val);
  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.unshift = function (val) {
  const newNode = new Node(val);
  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.insert = function (index, val) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  let newNode = new Node(val);

  let currentNode = this.head;
  let counter = 0;
  while (currentNode) {
    if (counter === index - 1) {
      break;
    }
    counter++;
    currentNode = currentNode.next;
  }

  newNode.prev = currentNode;
  newNode.next = currentNode.next;
  currentNode.next = newNode;

  this.length++;

  return this.length;
};

DoublyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  let currentNode = this.head;
  let counter = 0;
  while (currentNode) {
    if (counter === index) {
      break;
    }
    counter++;
    currentNode = currentNode.next;
  }

  return currentNode;
};

DoublyLinkedList.prototype.get = function (index) {
  let node = this.getNode(index);
  return node ? node.val : null;
};

DoublyLinkedList.prototype.set = function (index, val) {
  let node = this.getNode(index);

  if (node) {
    node.val = val;
    return true;
  }

  return false;
};

DoublyLinkedList.prototype.pop = function () {
  if (this.length === 0) {
    return undefined;
  }
  let removedNode = this.tail;
  this.tail = removedNode.prev;
  removedNode.prev = null;
  removedNode.next = null;

  this.length--;
  return removedNode.val;
};

DoublyLinkedList.prototype.shift = function () {
  if (this.length === 0) {
    return undefined;
  }
  let removedNode = this.head;
  this.head = removedNode.next;

  this.length--;
  return removedNode.val;
};

DoublyLinkedList.prototype.remove = function (index) {
  if (index < 0 || index >= this.length) return undefined;

  let removedNode = null;
  if (this.length === 1) removedNode = this.shift();
  else {
    let previousNode = this.getNode(index).prev;
    removedNode = previousNode.next;
    previousNode.next = previousNode.next.next;
    removedNode.next = null;
  }
  this.length--;
  return removedNode;
};

DoublyLinkedList.prototype.reverse = function () {
  let i = 0;
  let j = this.length - 1;

  while (i < j) {
    let temp = this.getNode(i).val;
    this.getNode(i).val = this.getNode(j).val;
    this.getNode(j).val = temp;
    i++;
    j--;
  }
  return this;
};

DoublyLinkedList.prototype.print = function () {
  let currentNode = this.head;
  while (currentNode) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }
};

let list = new DoublyLinkedList();
list.push(4);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
// list.reverse()
list.insert(2, 50);
list.print();
