function openMenu(event, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("news");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(menuName).style.display = "block";

  tablinks = document.getElementsByClassName("position-relative");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("tablink-active");
    tablinks[i].firstElementChild.style.color = "grey";
    tablinks[i].firstElementChild.parentElement.style.backgroundColor = "transparent";
  }
  event.currentTarget.parentElement.classList.add("tablink-active");
  event.currentTarget.style.color = "yellow";
  event.currentTarget.parentElement.style.backgroundColor = "rgb(161, 0, 53)";
}
document.getElementById("myLink").click();
