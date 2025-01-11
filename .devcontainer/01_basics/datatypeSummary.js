// Primitive -->

// 1.String
// 2.Number
// 3.Boolean
// 4.null
// 5.undefined
// 6.Symbol
// 7.BigInt 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 8850075312
console.log(bigNumber);


// Reference (Non Primitive )

// 1.Array
// 2.Objects
// 3.Functions 







const heros = ["Shaktiman " , "nagraj" , "doga"];
let myobj = {
    name : "Rushikesh",
    age : 22,


}
 const myfunction = function(){
 console.log("Hello World");

 
 }

 console.log(typeof anotherId);



 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++







 // stack (primitive ) ---> it gives value of variable   ,  heap(non primitive ) ------> it gives reference of variable 



 let myNickName = "rushikeshkukarni"

 let anotherNickName =  myNickName 
 anotherNickName = "rushikesh"

 console.log(anotherNickName);
 console.log( myNickName);
 
 


 let userOne = {
    email : "user@google.com",
   upi : "user@ybl"
}


let userTwo = userOne


userTwo.email = "rushikesh@goole.com"

console.log(userOne.email);
console.log(userTwo.email);