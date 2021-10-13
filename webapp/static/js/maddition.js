const sizein = document.querySelector("#size");
sizein.addEventListener("change", (event) => {
  const matrixin1 = document.getElementById("matrixin1");
  matrixin1.innerHTML = "<span>Matrix 1: </span>";
  const matrixin2 = document.getElementById("matrixin2");
  matrixin2.innerHTML = "<span>Matrix 2: </span>";
  for (let i = 0; i < sizein.value; i++) {
    let mrow = document.createElement("div");
    mrow.setAttribute("id", "1" + i + 1);
    let m1row = document.createElement("div");
    m1row.setAttribute("id", "2" + i + 1);
    for (let j = 0; j < sizein.value; j++) {
      let mrelement = document.createElement("input");
      mrelement.setAttribute("type", "number");
      mrow.appendChild(mrelement);
      let m1relement = document.createElement("input");
      m1relement.setAttribute("type", "number");
      m1row.appendChild(m1relement);
    }
    matrixin1.appendChild(mrow);
    matrixin2.appendChild(m1row);
  }
});
