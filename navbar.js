const close = document.querySelector(".close-menu");
const open = document.querySelector(".open-menu");
const check = document.querySelector("#check");
const tag = document.querySelector(".sidebar");
const screen = document.querySelector("body");

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "initial";
  close.style.lineHeight = "54px";
  tag.style.right = 0;
});
close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "initial";
  tag.style.right = "-300px";
});

window.addEventListener("DOMContentLoaded", function () {
  function checkScreenWidth() {
    if (window.innerWidth > 850) {
      open.style.display = "none";
      close.style.display = "none";
      tag.style.right = "-300px";
    } else {
      open.style.display = "block";
    }
  }

  // Check screen width on page load
  checkScreenWidth();

  // Check screen width on window resize
  window.addEventListener("resize", checkScreenWidth);
});

//dropdown----

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// gif hvering removal
const gif = document.querySelector(".giphy-embed");
gif.addEventListener("mouseover", (e) => {
  e.preventDefault();
  gif.style.pointerEvents = "none";
});
