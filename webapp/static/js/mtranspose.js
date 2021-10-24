const column = document.querySelector("#column");
const row = document.querySelector("#row");
column.addEventListener("change", (event) => {
  const matrix = document.getElementById("matrix");
  matrix.innerHTML = "<span>Matrix: </span>";
  for (let i = 0; i < row.value; i++) {
    let mrow = document.createElement("div");
    mrow.setAttribute("id", i + 1);
    for (let j = 0; j < column.value; j++) {
      let mrelement = document.createElement("input");
      mrelement.setAttribute("type", "number");
      mrow.appendChild(mrelement);
    }
    matrix.appendChild(mrow);
  }
});
