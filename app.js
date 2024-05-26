let log = document.querySelector("#icon");
let img = document.querySelector("#imog");

let cont = document.querySelector(".hero");
let mode = "light";

log.addEventListener('click',function(e){
  if(mode == "light"){
    img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKNda2KzWkyItr9CxezGKbjTgWtbHbzOdVg&s");
  log.setAttribute("src","https://cdn-icons-png.flaticon.com/128/979/979585.png");
cont.style.background = 'gray';
mode = "dark"
  }

  else if(mode =="dark"){
    img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpGlpXyWsXeGih0QafiVC4gLhNhPqqEDiMQ&s");
  log.setAttribute("src","https://cdn-icons-png.flaticon.com/128/1812/1812660.png");
cont.style.background = 'white';
mode = "light"
  }
})



