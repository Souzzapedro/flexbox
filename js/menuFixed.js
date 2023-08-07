let menusFixed = Array.from(document.getElementsByClassName("menu-fixed"));
function adicionarHidden() {
    menusFixed.forEach(menuFixed => {
        if (!menuFixed.classList.contains('hidden')) {
            menuFixed.classList.add('hidden');
        }
    });
}
function removerHidden() {
    menusFixed.forEach(menuFixed => {
        if (menuFixed.classList.contains('hidden')) {
            menuFixed.classList.remove('hidden');
        }
    });
}

let toogle3 = true;
let btnHanburguer = document.getElementById("btn-hanburguer");
let icon = document.getElementById("icon-menu");
btnHanburguer.addEventListener("click", function() {
    toogle3 = !toogle3;
    if(toogle3){
        adicionarHidden();
        if(icon.classList.contains("bi-x-lg")){
            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");
        }
    }else {
        removerHidden();
        if(icon.classList.contains("bi-list")){
        icon.classList.remove("bi-list");
        icon.classList.add("bi-x-lg");
        }
    }
});

adicionarHidden();