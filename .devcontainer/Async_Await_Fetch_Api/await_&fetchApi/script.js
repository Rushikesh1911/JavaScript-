async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}
async function main() {


    console.log("loading module");

    console.log("do something else");

    console.log("load data");
    let data = await getData()

    console.log(data);
    console.log("process data");
    console.log("task2");
}


// data.them((v)=>{

//     console.log(data);
//     console.log("process data");
// console.log("task2");

// })


