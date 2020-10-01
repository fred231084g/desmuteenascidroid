/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("creditos a ");
console.log("pythonBoy123 diseñador ");
console.log("ELPanaJose diseñador y creador de algunas de las imagenes");
console.log("scidroid el creador de algunas imagenes")
console.log("viva el comunismo de derecha ")
import 
let imagenes=require("./imagenes.json")
var img = document.createElement("img");
let naped=imagenes.links.map((o)=>{
  console.log(o)
img.src = o;
var src = document.getElementById("x");
 
src.appendChild(img);
})