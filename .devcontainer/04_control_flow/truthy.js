const userEmail = "kulkarni@gmail.com"
                          
if(userEmail){                                    // it got preassumed it is true and not need to show it's trueness
    console.log("GOT USER EMAIL");
     
} else {
    console.log("Don't have user email");
    
}


// falsy values :
//  false , 0 , -0 , BigInt , 0n , "" , null , undefined , NaN 


// truthy values: All except falsy are truthy ex are :
//  "0" , 'false' , "_" , [] , {} , functionn(){} , etc 


// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
    
}


//Nullish operating Opreator(??)// : null undefined

let val1;
// val1 = 5 ?? 10           // when response is not there or multiple responce then it assign the value to not disturb code
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20          // first value is assigned 
console.log(val1);


//ternary opreator 

// condition ? true : false

const teaprice = 10;
teaprice <= 15 ? console.log("less than 15") : console.log("greater than 10") 
