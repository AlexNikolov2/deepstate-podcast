export function myFunction() {
    var x = document.getElementById("navbar");
    let header = document.getElementById("header");
    if (x.style.display === "block") {
      x.style.display = "none";
      header.style.flexDirection = "row";

    } else {
      x.style.display = "block";
      header.style.flexDirection = "column";
    }
  }