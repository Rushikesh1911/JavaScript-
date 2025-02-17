async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })

// let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
//       let data = (await x).json()
//       console.log(x);
//       return 455 
    fetch('https://jsonplaceholder.typeicode.com/posts',{
            method:'POST',
            body:JSON.stringify({
                title:'foo',
                body: 'bar',
                userID: 1,

            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',

            },
        })
                let data = await XMLDocument.json()
                return data
}
async function main() {


    console.log("loading module");

    console.log("do something else");

    console.log("load data");                                    // settle means resolve or reject
                                                                // resolve means promise has setelled sucessfully 
                                                                // reject means promise has setteled has setteled sucessfully
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


