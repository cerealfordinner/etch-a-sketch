const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", function (e) {
    cell.setAttribute("style", "background-color:purple");
  });
  cell.addEventListener("mouseout", function (e) {
    cell.removeAttribute("style");
  });
});
