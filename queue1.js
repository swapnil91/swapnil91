//Queue (FIFO)

//Create new queue
let queue = [];

//push item into queue
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

//print content of queue
console.log(queue);

//remove an item from queue (1 should remove first because it entered first)
queue.shift();
queue.shift();

//print content of queue
console.log(queue);