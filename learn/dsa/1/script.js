// @ts-nocheck

let btn = document.getElementById("btnMenu");
let btn2 = document.getElementById("btnMenu2");
let sidebar = document.getElementsByClassName("sidebar")[0];
var x = window.matchMedia("(max-width: 750px)")
let logo = document.getElementsByClassName("logo")[0];

function myfun() {
    if(x.matches) {
        console.log("match")
        sidebar.style.display = "none";
        btn.onclick = function() {
            console.log("btn")
            sidebar.style.display = "none";
        };
        
        btn2.onclick = function() {
            console.log("btn2");
            sidebar.style.display = "block"
        }
    }
}

myfun(x)

