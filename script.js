function toggleNavbar() {
  var x = document.getElementById("myTopnav");
  var icon = document.querySelector(".topnav .icon i");

  // Toggle responsive class and icon
  if (x.className === "topnav") {
      x.className += " responsive";
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
  } else {
      x.className = "topnav";
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
  }
}
