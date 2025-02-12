let button  = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b>Wow you were clicked !</b>"
})

button.addEventListner("contextmenu",()=>{
    alert("Don't hack us by right click please")
})

document.addEventListner("keydown",(e)=>{
    console.log(e.key);
    
})