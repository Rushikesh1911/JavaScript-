// for 

// for (let i = 0; j < array.length; index++) {
//     const element = array[index];
    
// }
Array = [1,2,3,4,5,6]
for(let i  = 0 ; i < Array.length; i++){
    const element = i;
    if(element== 5){
        console.log("5 is best number");
        
    }
    // console.log(element);
    
    
}


for (let i = 1; i < 10; i++) {
    //console.log(`outerLoop  of  ${i}`)
    for (let j = 1; j < 10; j++) {
        //console.log(`! ${j}`)
        console.log( i + '*' + j + ' = ' + i*j);
        
        
    }
    
}

let a  = ["flash" , "ironman" , "spiderman" ] 
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
    
}


// break and continue

for (let index = 0; index <= 20; index++) {
    if(index== 5){
        console.log("5 is best number");
        break;                           // control flow breaking or stoping code 
    }
console.log(`value of i is ${index}`);

    
}
for (let index = 0; index <= 20; index++) {
    if(index== 5){
        console.log("5 is best number");
      continue                         // doesnt goes out of code and let go first mistake
    }
console.log(`value of i is ${index}`);

    
}