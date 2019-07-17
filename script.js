var h3get=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
console.log(h3get);
console.log(color1);
console.log(color2);

var bodygra=document.querySelector("#gradiant");
function setGradient(){
    bodygra.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    h3get.textContent=bodygra.style.background+";"


}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);