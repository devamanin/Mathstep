const rowA = document.querySelector("#rowA");
const columnA = document.querySelector("#columnA");
columnA.addEventListener("change", (event) => {
  const matrixA = document.getElementById("matrixA");
  matrixA.innerHTML = "<span>Matrix A: </span>";
  for (let i = 0; i < rowA.value; i++) {
    let mrow = document.createElement("div");
    mrow.setAttribute("id", "A" + i + 1);
    for (let j = 0; j < columnA.value; j++) {
      let mrelement = document.createElement("input");
      mrelement.setAttribute("type", "number");
      mrow.appendChild(mrelement);
    }
    matrixA.appendChild(mrow);
  }
});
const rowB = document.querySelector("#rowB");
const columnB = document.querySelector("#columnB");
columnB.addEventListener("change", (event) => {
  const matrixB = document.getElementById("matrixB");
  matrixB.innerHTML = "<span>Matrix B: </span>";
  for (let i = 0; i < rowB.value; i++) {
    let mrow = document.createElement("div");
    mrow.setAttribute("id", "B" + i + 1);
    for (let j = 0; j < columnB.value; j++) {
      let mrelement = document.createElement("input");
      mrelement.setAttribute("type", "number");
      mrow.appendChild(mrelement);
    }
    matrixB.appendChild(mrow);
  }
});
