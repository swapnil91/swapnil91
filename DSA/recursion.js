//recursion is the logic of calling function itslef inside it
function countdown(x){
        if(x == 0){ //this is breaking condition with return, there must always be a breaking condition in recursion otherwise it will go inside infinite loop and crash the software/code/memory
            console.log("Done!");
            return;
        }
        else{
            console.log(x);
            countdown(x-1);
        }
    }


countdown(5);

function power(num, pwr){
    if(pwr == 0){
        return 1;
    }else{
        return num * power(num, pwr-1);
    }
}

console.log(power(2, 3));

function factorial(num){
    if(num == 0){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}

console.log(factorial(9));
