let button = document.getElementById("btn");
button.addEventListener("dblclick", () => {
  alert("i'm clicked");
  document.querySelector(".box").innerHTML = "hi welcome";
});
