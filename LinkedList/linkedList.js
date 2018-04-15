class LinkedNode {
  constructor (element) {
    this._element = element
    this._next = null
  }
  element () {
    return this._element
  }
  next () {
    return this._next
  }
  setNext (linkedNode) {
    this._next = linkedNode
  }
}

class LinkedList {
  constructor () {
    this._length = 0
    this._head = null
  }
  append (element) {
    let node = new LinkedNode(element)
    if (this._head === null) {
      this._head = node
    } else {
      let currentNode = this._head
      while (currentNode.next()) {
        currentNode = currentNode.next()
      }
      currentNode.setNext(node)
    }
    this._length++
    return this
  }
  insert (position, element) {
    let index = 0
    let previousNode
    let currentNode = this._head
    let node = new LinkedNode(element)
    if (position > -1 && position <= this._length) {
      if (position === 0) {
        this._head = node
        node.setNext(currentNode)
      } else {
        while (index < position) {
          previousNode = currentNode
          currentNode = currentNode.next()
          index++
        }
        previousNode.setNext(node)
        node.setNext(currentNode)
      }
      this._length++
      return this
    }
    return console.log('The position is out of range.')
  }
  remove (element) {
    let index = this.indexOf(element)
    this.removeAt(index)
    return this
  }
  removeAt (position) {
    if (position > -1 && position <= this._length) {
      let previousNode
      let currentNode = this._head
      let index = 0
      if (position === 0) {
        this._head = currentNode.next()
      } else {
        while (index < position) {
          previousNode = currentNode
          currentNode = currentNode.next()
          index++
        }
        previousNode.setNext(currentNode.next())
      }
      this._length--
      return this
    }
    return console.log('The position is out of range.')
  }
  indexOf (element) {
    let index = 0
    let currentNode = this._head
    while(currentNode) {
      if (currentNode.element() === element) {
        return index
      }
      currentNode = currentNode.next()
      index++
    }
    return -1
  }
  head () {
    return this._head
  }
  size () {
    return this._length
  }
  isEmpty () {
    return this._length === 0
  }
}

export default {
  LinkedNode: LinkedNode,
  LinkedList: LinkedList
}
