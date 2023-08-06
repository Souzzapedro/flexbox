

let toogle = true;

let btnAlterarFlexDirection = document.getElementsByClassName("btn-flex-direction");
for (let i = 0; i < btnAlterarFlexDirection.length; i++) {
  btnAlterarFlexDirection[i].addEventListener('click', function () {
    
    toogle = !toogle;

    let textoRow = document.getElementsByClassName("texto-row");
    let textoColumn = document.getElementsByClassName("texto-column");

    for(let i = 0; i < textoRow.length; i++) {
      if(toogle) {
        textoRow[i].classList.remove("hidden");
        textoColumn[i].classList.add("hidden");
      }else {
        textoRow[i].classList.add("hidden");
        textoColumn[i].classList.remove("hidden");
      }
    }


    let containers = document.querySelectorAll(".flex");
    containers.forEach((container) => {
    container.classList.toggle("direction-column");
  });
  });
}




