
  function myFunction() {
    var x = document.getElementById("new-topvar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
