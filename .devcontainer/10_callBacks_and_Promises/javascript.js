console.log("rushi is good");
console.log("rushikesh is good");



setTimeout(() => {
    console.log("I am inside settimeout");
    
},3500);

setTimeout(() => {
    console.log("I am doing js");
    
},4850);
console.log("the end");

const fn = ()=>{
    console.log("nothing");
    
}

const callback = (arg)=>{
    console.log(arg);
    fn()
    
}
const loadscript = (src,callback) => {
   let sc =  document.createElement("script");
  sc.src =src;
  sc.onload  =  callback("rushi" ,fn);
  document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

function getData(dataId ,getNextData){
    setTimeout(() => {
        console.log("data" ,dataId);
        if(getNextData){
            getNextdata();
        }
        
    }, 2000);   
}

getData(1,() => {
    console.log("Loading data 2.....");
    getData(2,() =>{
        console.log("Loading data 2.....");
        getData(3,() =>{
            console.log("Loading data 4.....");
            getData(4);
        });
    });
});