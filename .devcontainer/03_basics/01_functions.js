
function sayMyName(){
console.log("r")
console.log("u")
console.log("s")
console.log("h")
console.log("i")
console.log("k")
console.log("e")
console.log("s")
console.log("h")
}

// sayMyName


// function addTwoNumber(number1,number2){    // number1 and number2 here are parameters
   
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){    // number1 and number2 here are parameters
   
    // let result = number1+number2
    // return result

    return number1 + number2

}

const result = addTwoNumber(3,5)   // argument

console.log("result: ",result);


function loginUserMessage(username = "Rushi"){
    if(!username){
        console.log("please enter a message");
        return

    }
    return '${username} just logged in'

}

//console.log(loginUserMessage("rushikesh"))
console.log(loginUserMessage())

function CalculateCartPrice(val1,val2,...num1){     // this is rest opreator{...} or spread opreator
    return num1
}
//console.log(CalculateCartPrice(200,300,600,1400));



const user={
    price : 1500,
    username: "rushikesh",

}

function handleobject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price} ');

    
}
handleobject(user)



const myNewArray = [200,800,736,784];

function returnSeconValue(getArray){
    return getArray[1]

}
console.log(returnSeconValue([200,800,458,786]));
