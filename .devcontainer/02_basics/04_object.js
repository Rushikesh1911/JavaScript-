// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "rushikesh"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@.com",
       fullname: {
        userfullname: {
            firstname: "rushikesh",
            lastname: "kulkarni"
        }
    }
}
    // console.log(regularUser.fullname.userfullname.firstname);

    const obj1 = {1:"a" , 2:"b"}
    const obj2 = {3:"a" , 4: "b"}
    // const obj3 = Object.assign( {} ,obj1,obj2)
    // console.log(obj3);

    const obj3 = {...obj1,...obj2}
    console.log(obj3);   

    const users = [
        {
            id:1,
            email:"rushikesh@gmail.com"
        },
        {
            id:1,
            email:"rushikesh@gmail.com"
        },
        {
            id:1,
            email : "rushikesh@gmail.com"
        }
    ]

  users[1].email
  console.log(tinderUser);

  console.log(Object.keys(tinderUser));
  console.log(Object.values(tinderUser));
  console.log(Object.entries(tinderUser));

  console.log(tinderUser.hasOwnProperty('isloggedIn'));          

  
  
  