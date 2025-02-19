// let obj = {
//     a:1,
//     b:"rushikesh",
// }
// console.log(obj);

// let animal ={
//     eats:true,
// };

// let rabbit = {
//     jumps: true,
// };

// rabbit.__proto__ = animal;     // sets rabbit.[[prototype]] = animal



class animal {
    constructor(name){
        this.name = name
        console.log("object created is ...");
        
    }
    eats(){
        console.log(" he is eating")
        
    }
    jumps(){
        console.log("he is jumping ")
        
    }
}
    class lion extends animal{
        constructor(name){
            super(name);
            this.name = name
            console.log("object created and he is lion ...");
        }
            eats(){
                super.eats()
                console.log(" he is roaring");
                
    }
}
    let a = new animal("bunny");
    console.log(a);

    let L = new lion ('sheru')
    console.log(L);
    