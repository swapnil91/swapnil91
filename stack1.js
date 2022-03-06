//Stack (LIFO)

//Create new stack
let stack = [];

//push item into stack
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

//print content of stack
console.log(stack);

//pop an item off from stack (5 should remove first because it entered last)
stack.pop();
stack.pop();

//print content of stack
console.log(stack);