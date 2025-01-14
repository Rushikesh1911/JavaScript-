const name = "Rushikesh";
const repoCount = 50;

console.log('Hello my name is ${name}  and my repo count is ${repoCount}');


const gameName = new String('rushikesh')



 console.log(gameName[0]);

 console.log(gameName.__proto__); 


 console.log(gameName.length);
 console.log(gameName.toLocaleUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('i'));







 const newString = gameName.substring(0,4);
console.log(newString)






 const anotherString =gameName.slice(-8,4)
 console.log(anotherString);






const newStringOne = "     rushikesh      "   //sonmetimes when extra space or extra is needed to be cut trim is used
console.log(newStringOne.trim());


const url = "https://rushikesh.com/rushikesh%20kulkarni"

console.log(url.replace('%20','-'))


console.log(url.includes("rushikesh"))

console.log(gameName.split('-'))
