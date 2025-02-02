const user = {
    username: "rushikesh",
    price: 999,
    
    welcomeMessage: function() {
        console.log(${this.username}, welcome to website);
    }
};

user.welcomeMessage();  // Corrected method call
console.log(this);  // Logs the global object, in a browser it will be window