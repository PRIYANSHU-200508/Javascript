function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewstr;
  if (views < 1000) {
    viewstr = views
  } else if (views > 1000000) {
    viewstr = views / 100000 + "M";
  } else {
    viewstr = views / 1000 + "k";
  }

  let html = `<div class="card">
        <div class="img"> ${thumbnail}alt="">
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}</h1> <p>${cName} . ${viewstr} views . ${monthsOld} month ago </p>
        </div>
      </div>`


document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html     
}

createCard("JavaScript - Selecting by Ids, Classes, and More | Sigma Web Development Course - Tutorial #68", "Priyanshu code", "30","30","20:00", "")