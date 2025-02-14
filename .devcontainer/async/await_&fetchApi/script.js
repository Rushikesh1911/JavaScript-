function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455)
        },3500);
    })
}

console.log("loading module");

console.log("do something else");

console.log("load data");
let data = getData()

console.log(data);
console.log("process data");


console.log("task2");
