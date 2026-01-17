
console.log("iiiiiii") 
 
let a = document.querySelector(".main").lastElementChild.innerHTML ="last box"


  //inserting new element ......
 let div = document.createElement("div")
 div.innerHTML ="this is a crated box.."
div.setAttribute("class", "created")
document.querySelector(".main").append(div)
div.style.border="2px solid "

// div.addEventListener ("click", () => {
//   div.style.maxWidth="10vw "
//   div.style.color="green"
// })




