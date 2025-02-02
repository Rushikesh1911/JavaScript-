

let a = 842
if(true){
  
let a = 10
const b = 20
console.log("INNER : " ,a);


}


 console.log(a);
// console.log(b);
// console.log(c);


for (let i = 0; i<Array.length; i++ ){
  const element = Array[i]; 
}


function one(){
  const username = "Rushikesh"
   function two(){
    const website = "You tube"
    // console.log(username);
    
   }
  //  console.log(website);
  // two()
   
}
// one()


if(true){
  const username = "Rushikesh"
  if(username === "Rushikesh"){
    const website = " Youtube"
    console.log(username + website);
    
  }
  // console.log(website);

  
  
}
// console.log(username);



// +++++++++++++++++++++++ intresting +++++++++++++++++++
console.log(addone(5))
function addone(num){
  return num + 1
}

         
const addTwo =  function(num){
    return num + 2
}
console.log(addTwo(5));       // this cannot be written in early intilization

