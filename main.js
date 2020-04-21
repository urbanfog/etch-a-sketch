const main = document.getElementById('main');
let grid_length = 100;

// determines height & width of square
function sq_dims(grid_length) {
  return Math.sqrt(500**2 / grid_length**2)
}

// Add button to page for resetting
const button = document.querySelector("#clear");
button.addEventListener("click", reset);

// Draw grid
function draw_grid(size, sq_dims) {
  for (let i = 1; i < ((size + 1 ) * size); i++) {
    const newdiv = document.createElement('div');
    newdiv.id = i;
    newdiv.setAttribute('style', `height: ${sq_dims}px; width: ${sq_dims}px;`);
    main.appendChild(newdiv);
  }
  console.log(main.lastChild.id);
}
draw_grid(grid_length, sq_dims(grid_length));

// Add event listener to colorize hovered squares
const divs = document.querySelectorAll("div");
divs.forEach(div => {
  div.addEventListener("mouseover", color);
});

function color(e) {
  e.target.classList.add("colored");
}

function clearAll() {
  while (main.firstChild) {
  main.removeChild(main.lastChild);
  }
  console.log(1, main.lastChild.id);
}

function reset() {
  new_length = prompt('How many squares on each side?');
  clearAll;
  draw_grid(new_length, sq_dims(new_length));
}
