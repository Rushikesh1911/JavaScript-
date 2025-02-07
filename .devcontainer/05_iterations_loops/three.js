// for of loop //

// ["" , '' , ""]
// [{},{},{}]

const arr = [1,2,3,4,5,6]

for (const num of arr){
    console.log(num);
    
}

const greeting = "hello world"
for(const greet of greeting){
    console.log(` Each char is ${greet}`);
    
}


// Maps 

const map = new Map()
map.set(`IN` , "India")
map.set(`usa` , "United Staes Of America")
map.set(`fr` , "France")

console.log(map);

for (const [key , value] of map) {
    console.log(key,':-' , value);
    
    
}

const myObj = {
    game1 : 'bgmi',
    game2 : 'pokemon',
}

for (const [key , value] of myObj) {      // this is not way to iterate myObj
    console.log(key,':-' , value);
    
    
}

