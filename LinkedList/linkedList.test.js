import LinkedListObj from './linkedList.js'

const LinkedNode = LinkedListObj.LinkedNode
const LinkedList = LinkedListObj.LinkedList

describe('LinkedList', () => {
  let MyLinkedList

  beforeEach(() => {
    MyLinkedList = new LinkedList()
    MyLinkedList.append(1)
    MyLinkedList.append(2)
    MyLinkedList.append(3)
  })

  it('element should be 1', () => {
    expect(MyLinkedList.head().element()).toBe(1)
  })

  it('element should be 2', () => {
    MyLinkedList.remove(1)
    expect(MyLinkedList.head().element()).toBe(2)
  })

  it('element should be 1', () => {
    MyLinkedList.removeAt(1)
    expect(MyLinkedList.head().element()).toBe(1)
  })

  it('element should be 5', () => {
    MyLinkedList.insert(0, 5)
    expect(MyLinkedList.head().element()).toBe(5)
  })

  it('index should be 2', () => {
    expect(MyLinkedList.indexOf(3)).toBe(2)
  })

  it('size should be 3', () => {
    expect(MyLinkedList.size()).toBe(3)
  })

  it('isEmpty should be false', () => {
    expect(MyLinkedList.isEmpty()).toBeFalsy()
  })
})
