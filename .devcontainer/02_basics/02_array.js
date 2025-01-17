const marvel_heroes = ["thor" , "Ironman " ,"spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[1][3]);

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

const  all_newheroes = [...marvel_heroes,...dc_heroes]

// console.log(all_newheroes);



const anotherarray = [1,2,3,[4,5,6],8,4,[4,7,6]]

const real_another_array = anotherarray.flat(Infinity)  // makes to create a single array from array which included many sub array
console.log(real_another_array);


console.log(Array.from("rushikesh"))
console.log(Array.from({name:"rushikesh"}))




let score1 = 100;

let score2 = 200;


let score3 = 300;

console.log(Array.of(score1,score2,score3));

