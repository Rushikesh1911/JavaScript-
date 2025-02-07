// const myObj = {
//     js : 'javascript',
//     cpp : 'c++',
//     swift :'swift by apple'

// }
// for (const key in  myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
     
// } 

// const programming = ("js","py", "java" ,"rust")
// for(const key in programming){
//     console.log(programming[key]);
// }

const map = new Map()
map.set(`IN` , "India")
map.set(`usa` , "United Staes Of America")
map.set(`fr` , "France")              
for (const key in map) {                          // it will be not itterable
    console.log(key);
    
}