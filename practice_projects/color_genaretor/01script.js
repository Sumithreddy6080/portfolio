console.log("hello there ! ");
let randomcolor = ()=>{
    let val1 = Math.ceil(0+Math.random()*255)
    let val2 = Math.ceil(0+Math.random()*255)
    let val3= Math.ceil(0+Math.random()*255)

    return `rgb(${val1},${val2},${val3})`
}

let body = document.querySelector("body");
let box = document.querySelectorAll(".box");

box.forEach((con) => {
 
  con.addEventListener("click", (e) => {
   
    if (e.target.id == "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "gold") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "random") {
        
    body.style.backgroundColor = randomcolor();
    }
  });
});
