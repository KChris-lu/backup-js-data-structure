# 链表

配置：头指针、节点

特点：非顺序存储结构的线性表

类型：单向链表、双向链表、循环链表

单向链表的操作：

1 添加节点（指定内容）

2 添加节点（指定位置）

3 删除节点（指定内容）

4 删除节点（指定位置）

5 获取节点位置（指定内容）

6 是否为空

7 链表长度

8 链表头指针

## Signature

**class LinkedNode**

- _element => content
- _next => LinkedNode
- next()
- element()
- setNext()

**class LinkedList**

- _length
- _head => LinkedNode
- append(element) => LinkedList
- insert(position, element) => LinkedList
- remove(element) => LinkedList
- removeAt(position) => LinkedList
- indexOf(element) => position:int
- isEmpty() => boolean
- size() => int
- head() => LinkedNode
