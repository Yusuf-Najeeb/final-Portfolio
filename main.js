"use strict";
// Smooth Scroll javascript code
$("body a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;

    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

let hamburger = document.getElementById("hamburger");
let opened = document.getElementById("opened");
let closed = document.getElementById("closed");
let mobileMenu = document.getElementById("mobile_menu");

hamburger.addEventListener("click", function () {
  opened.classList.toggle("hidden");
  opened.classList.remove("block");
  closed.classList.toggle("hidden");

  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
});
