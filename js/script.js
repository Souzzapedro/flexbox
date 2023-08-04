
let divEixoX = document.createElement("div");
divEixoX.classList.add("eixo", "X", "desativo");
let divEixoY = document.createElement("div");
divEixoY.classList.add("eixo", "Y", "desativo");

let containers = document.getElementsByClassName("container");

for (let i = 0; i < containers.length; i++) {
  // Clonar os elementos criados para cada container
  let eixoXClone = divEixoX.cloneNode(true);
  let eixoYClone = divEixoY.cloneNode(true);

  // Adicionar os eixos aos containers
  containers[i].appendChild(eixoXClone);
  containers[i].appendChild(eixoYClone);
}


const botao = document.getElementById('btnEixo');

botao.addEventListener('click', function () {
  // Alternar a classe 'desativo' nos eixos
  let eixos = document.querySelectorAll(".eixo");
  eixos.forEach((eixo) => {
    eixo.classList.toggle("desativo");
  });

});









var column = "column";
var row = "row;  <= Padrão";
var texto = column;

let btnAlterarFlexDirection = document.getElementsByClassName("btn-flex-direction");/* 
let codigosNasPaginas = document.getElementById("codigoNaPagina");
codigosNasPaginas.textContent  = `${texto}`;  */

for (let i = 0; i < btnAlterarFlexDirection.length; i++) {
  btnAlterarFlexDirection[i].addEventListener('click', function () {



    
    let containers = document.querySelectorAll(".flex");
    containers.forEach((container) => {
    container.classList.toggle("direction-column");
  });
  });
}
/* 
function mudarTexto() {
  texto = texto === column ? row : column;
  console.log(texto);
} */