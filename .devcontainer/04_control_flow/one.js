// if 
const is_user_logged_in = true
 const temp = 37                                        // >= , >= , > , < , = , == , ===  , != , !==
if(temp > 40){
    console.log("it is hot")
}
else {
    console.log("it is not so hot")
}


const score = 54;

if (score>50){
    const power = "fly"
    console.log(`User power : ${power}`);
}
console.log(`User power : ${power}`)

const  balance = 1000;
// if(balance > 500 ) console.log("test");

if(balance < 500){
console.log(balance);

} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const userLoggedInGoogle = false
const userLoggedInEmail = true

if(userLoggedIn && debitCard ){
    console.log("Allow to buy something");
    
}

if(userLoggedInGoogle || userLoggedInEmail ){
    console.log("User logged In ");
    
}
