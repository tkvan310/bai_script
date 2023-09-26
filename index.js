const trigger = document.getElementById("trigger");
const counter = document.getElementById("counter");
let count = 0;
 console.log(trigger);
 trigger.addEventListener(
    "click", (event) =>{
        console.log(" Da click vao nut trigger");
        count = count + 1;
       counter.innerHTML = count; 
    }
 )
 const like = document.getElementById("like");
 console.log(like);
 like.addEventListener(
    "click", (event) =>{
        console.log(" Da click vao nut trigger");
        count = count + 1;
       counter.innerHTML = count; 
    }
 )