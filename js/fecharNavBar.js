let btnFechar = document.getElementById("fechar-nav");
let btnAbrir = document.getElementById("btn-abrir-nav");



let todosOsContainers = Array.from(document.getElementsByClassName("container"));
todosOsContainers.forEach((container) => {
    container.classList.add("width-60vh");
});


btnFechar.addEventListener("click", function() {
    let nav = document.getElementById("nav");
    let conteudo = document.getElementsByClassName("conteudo");
    
    nav.classList.add("hidden");
    btnAbrir.classList.remove("hidden");
    conteudo[0].classList.remove("margin-conteudo");

    todosOsContainers.forEach((container) => {
        container.classList.remove("width-60vh");
        container.classList.add("width-85vh");
    });
});


btnAbrir.addEventListener("click", function() {
    let nav = document.getElementById("nav");
    let conteudo = document.getElementsByClassName("conteudo");
    
    nav.classList.remove("hidden");
    btnAbrir.classList.add("hidden");
    conteudo[0].classList.add("margin-conteudo");
    
    todosOsContainers.forEach((container) => {
        container.classList.add("width-60vh");
        container.classList.remove("width-85vh");
    });
});