
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
