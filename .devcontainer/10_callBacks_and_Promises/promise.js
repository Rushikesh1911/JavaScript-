const getPromise = () => {
    return new Promise((resolve , reject) =>{
        console.log("I am promise");
        // resolve("sucess");
        reject("error");
    });
};
let promise  =  getPromise();
promise.then((res)=>{
    console.log("Promise fullfilled",res);
    
});

promise.catch((err) =>{
    console.log("rejected",err);
    
})





// console.log('rushi is good');

// let prom1 = new Promise((resolve , reject)=>{
//     let a  = Math.random();
//     if(a<0.5){
//         reject("no random number was not supporting you")
//     }
//     else{
//         setTimeout(()=>{
//             console.log("yes i am done ")
//             resolve("happy")   
//         },3000);
//     }
// })


// let prom2 = new Promise((resolve , reject)=>{
//     let a  = Math.random();
//     if(a<0.5){
//         reject("no random number was not supporting you")
//     }
//     else{
//         setTimeout(()=>{
//             console.log("yes i am done 2")
//             resolve("happy 2")   
//         },3000);
//     }
// })
    

// let p3 = Promise.all([prom1, prom2])
// p3.then(()=>{
//     console.log(a);
    
// }).catch(err=>{
//     console.log(err);
    
// })

