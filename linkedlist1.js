// Node class

class Node {
    // constructor
    constructor(val)
    {
        this.val = val;
        this.next = null
    }

    get_data(){
        return this.val;
    }

    set_data(val){
        this.val = val;
    }

    get_next(){
        return this.next;
    }

    set_next(next){
        this.next = next;
    }
}


// LinkedList class (it saves data in object format or JSON in JS)

class LinkedList {
    // constructor
    constructor(head = null){
        this.head = head;
        //count or size of element in linkedlist
        this.size = 0;
    }

    get_size(){
        return this.size;
    }

    //process 1 - Insert a new node
    insert(data){
        let createNewNode = new Node(data);
        createNewNode.set_next(this.head);
        this.head = createNewNode; //why tempnode.get_data() function is not giving error 'Cannot read properties' in above dump_list() function because of this line. this line assign new Node(data) object thats why that function aligned with this.head
        this.size += 1;
    }

    //process 2 - Find a node with traversing linked list
    find(val){
        let item = this.head;
        console.log(item);

        while(item != null){
            if(item.get_data() == val){
                return item;
            }else {
                item = item.get_next()
            }
        }

        return null;
    }

    //process 3 - Remove a node at given index
    delete(index){
        if(index > this.size - 1 || this.head == null){
            return
        }
        if(index == 0){
            this.head = this.head.get_next();
        }else{
            let tempIndex = 0;
            let node = this.head;

            //GO to right before that node which we are deleting and assign its next to next.next
            while (tempIndex < index - 1) {
                // statement
                node = node.get_next(); //this will give us the node which's next node needs to delete, like if we want to delete 7 it will give us 8 but it will only run till 9
                //because 9's next is 8 thats why we are running this till (< index - 1) if index is 3 then it will run only (< 3 - 1) means (< 2) that is 1 and 1's next will be
                //9's next means 8. 
                console.log(JSON.stringify(node) + "in while loop")
                tempIndex += 1;
            }

            node.set_next(node.get_next().get_next());
            this.size -= 1; //decrement the size also because 1 node is deleted
        }
    }

    //print content of list
    dump_list(){
        let tempnode = this.head;

        while(tempnode != null){
            console.log("Node: " + tempnode.get_data() + ", Next: " + JSON.stringify(tempnode.get_next()));
            tempnode = tempnode.get_next(); //everytime this line assign next to tempnode variable so at last it will be null
        }
    }

}



// Node class call
 let newNode = new Node("Song 1");

 console.log(newNode.get_data());
 let setData = newNode.set_data("Song 2");
 console.log(newNode.get_data());
 console.log(newNode.get_next());
 let setNext = newNode.set_next("Song 3");
 console.log(newNode.get_next());
 console.log(newNode);

// // LinkedList class call
 let newLinkedList = new LinkedList;
 console.log(newLinkedList);
 console.log(newLinkedList.dump_list());

 newLinkedList.insert("Song 4");
 console.log(newLinkedList);

 newLinkedList.insert("Song 5");
 console.log(newLinkedList);

 newLinkedList.insert("Song 6");
 console.log(newLinkedList);

 newLinkedList.insert("Song 7");
 console.log(newLinkedList);

 newLinkedList.insert("Song 8");
 console.log(newLinkedList);

 newLinkedList.insert("Song 9");
 console.log(newLinkedList);

 newLinkedList.insert("Song 10");
 console.log(newLinkedList);

 console.log(newLinkedList.dump_list());

 console.log(newLinkedList.find("Song 3"));
 console.log(newLinkedList.find("Song 4"));

console.log(newLinkedList.delete(3));

console.log(newLinkedList.dump_list());



