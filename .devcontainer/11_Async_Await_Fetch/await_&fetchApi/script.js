function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 3500);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 6000);
    });
}

console.log("fetching data1...");

let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("fetching data2..."); // then nesting like if I fetch data 1 then only fetch data 2

    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    });
});

// console.log("fetching data2...");

// let p2 = asyncFunc1();
// p2.then((res) => {
//     console.log(res);

// });










// async function getData() {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve(455)
// //         }, 3500);
// //     })

// // let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
// //       let data = (await x).json()
// //       console.log(x);
// //       return 455
//     fetch('https://jsonplaceholder.typeicode.com/posts',{
//             method:'POST',
//             body:JSON.stringify({
//                 title:'foo',
//                 body: 'bar',
//                 userID: 1,

//             }),
//             headers:{
//                 'Content-type': 'application/json; charset=UTF-8',

//             },
//         })
//                 let data = await XMLDocument.json()
//                 return data
// }
// async function main() {


//     console.log("loading module");

//     console.log("do something else");

//     console.log("load data");                                    // settle means resolve or reject
//                                                                 // resolve means promise has setelled sucessfully
//                                                                 // reject means promise has setteled has setteled sucessfully
//     let data = await getData()

//     console.log(data);
//     console.log("process data");
//     console.log("task2");
// }


// // data.them((v)=>{

// //     console.log(data);
// //     console.log("process data");
// // console.log("task2");

// // })


