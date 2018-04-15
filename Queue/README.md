# 队列

运作原理：FIFO（First In First Out，先进先出）

配置：插入、删除、队首元素

特点：在队尾完成插入操作，在队首完成删除操作

应用：顺序访问单项数据



## Signature

**class Queue**

单链队列

- init() => Queue:[]item
- enqueue(item) => Queue:[]item
- dequeue() => Queue:[]item
- front() => item
- isEmpty() => boolean
- size() => int
- clear() => Queue:[]item

**class PriorityQueue**

优先队列：队列中的元素有优先级排序，1 优先级最高排在最前面，以此类推

- init() => PriorityQueue:[]Item
- enqueue(item) => PriorityQueue:[]Item
- dequeue() => PriorityQueue:[]Item
- front() => Item
- isEmpty() => boolean
- size() => int
- clear() => PriorityQueue:[]Item

**class Item**

- content：element
- priority：int



## MessageQueue

定义：消息队列，进程间或者线程间的一种通信方式。<br>角色：消息的发送者、消息的接收者、消息队列<br>交互：消息的发送者将消息保存在队列内，消息的接收者从队列取出消息<br>特点：消息队列本身是异步的，它允许消息的接收者在很长的时间后取回消息。发送者将消息发送到队列后不等待响应，接收者轮询消息队列获取最近的消息。<br>应用：充当进程间或者线程间的缓冲；通过消息队列中的消息数量，侦测接收线程或者进程性能是否有问题。

