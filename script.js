let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function toggleMode() {
  let bg = document.body;
  bg.classList.toggle("dark-mode");
  let bb = document.getElementById("id1")
  let bb1 = document.getElementById("id2")
  let bb2 = document.getElementById("id3")
  let bb3 = document.getElementById("id4")
  if ((bb.className && bb1.className && bb2.className && bb3.className) === "navitm") {
    bb.className = "xyz"
    bb1.className = "xyz"
    bb2.className = "xyz"
    bb3.className = "xyz"
  }
  else {
    bb.className = "navitm";
    bb1.className = "navitm";
    bb2.className = "navitm";
    bb3.className = "navitm";
  }
}