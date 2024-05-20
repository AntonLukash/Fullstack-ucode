class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  remove(value) {
    let current = this.head;
    let previous = null;
    while (current) {
      if (current.data === value) {
        if (previous) {
          previous.next = current.next;
          if (!current.next) {
            this.tail = previous;
          }
        } else {
          this.head = current.next;
          if (!current.next) {
            this.tail = null;
          }
        }
        this.length--;
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  count() {
    return this.length;
  }

  log() {
    const values = [...this].join(", ");
    console.log(values);
  }
}

function createLinkedList(arr) {
  const ll = new LinkedList();
  for (const value of arr) {
    ll.add(value);
  }
  return ll;
}

