//singleton 

//object literals
const mySym = Symbol("key1")
const jsUser = {
  " name":"rushikesh kulkarni",
  [mySym]: "mykey1",
  age: 18,
  location: "kalyan",
 isloggedin: false,
  email: "rushikeshkulkarni191106@google.com",
  lastloggedIn: ["Monday","Tuesday"]

}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log( jsUser[mySym]);

jsUser.email = "rushikeshchatgpt.com"
// Object.freeze(jsUser)   // it freeze the value now doesn't allow to modify
jsUser.email = "rushikesh@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log('hello i am rushikesh", ${this.name}');
    
}
console.log(jsUser.greeting());



