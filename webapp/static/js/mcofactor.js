const sizein = document.querySelector("#size");
sizein.addEventListener("change", (event) => {
  const matrixin = document.getElementById("matrixin");
  matrixin.innerHTML = "<span>Matrix: </span>";
  for (let i = 0; i < sizein.value; i++) {
    let mrow = document.createElement("div");
    mrow.setAttribute("id", i + 1);
    for (let j = 0; j < sizein.value; j++) {
      let mrelement = document.createElement("input");
      mrelement.setAttribute("type", "number");
      mrow.appendChild(mrelement);
    }
    matrixin.appendChild(mrow);
  }
});
