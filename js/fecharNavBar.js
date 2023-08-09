let btnFechar = document.getElementById("fechar-nav");
let btnAbrir = document.getElementById("btn-abrir-nav");


let todosOsContainers = Array.from(document.getElementsByClassName("container"));



btnFechar.addEventListener("click", fecharMenu);
function fecharMenu() {
    let nav = document.getElementById("nav");
    let conteudo = Array.from(document.getElementsByClassName("conteudo"));

    let tamanho = verificarLarguraDaTela();
    if (tamanho === "<=1075") {
        
        nav.classList.toggle("hidden");

        conteudo.forEach((c) => {
            if (!c.classList.contains("margin-0")) {
                c.classList.add("margin-0");
            }
            if (c.classList.contains("margin-conteudo")) {
                c.classList.remove("margin-conteudo");
            }
        });

        todosOsContainers.forEach((container) => {
            if (container.classList.contains("width-60vw")) {
                container.classList.remove("width-60vw");
            }
            if (!container.classList.contains("width-80vw")) {
                container.classList.add("width-80vw");
            }
            if (container.classList.contains("width-96vw")) {
                container.classList.remove("width-96vw");
            }
        });

    } else if (tamanho === "<=860") {
        

        nav.classList.toggle("hidden");


    } else {
        nav.classList.toggle("hidden");

        conteudo.forEach((c) => {
            if (!c.classList.contains("margin-0")) {
                c.classList.add("margin-0");
            }
            if (c.classList.contains("margin-conteudo")) {
                c.classList.remove("margin-conteudo");
            }
        });

        todosOsContainers.forEach((container) => {
            if (container.classList.contains("width-60vw")) {
                container.classList.remove("width-60vw");
            }
            if (!container.classList.contains("width-80vw")) {
                container.classList.add("width-80vw");
            }
            if (container.classList.contains("width-96vw")) {
                container.classList.remove("width-96vw");
            }
        });
    }
};


btnAbrir.addEventListener("click", abrirMenu);
function abrirMenu() {
    let nav = document.getElementById("nav");
    let conteudo = Array.from(document.getElementsByClassName("conteudo"));

    let tamanho = verificarLarguraDaTela();
    if (tamanho === "<=1075") {

        nav.classList.toggle("hidden");

        conteudo.forEach((c) => {
            if (c.classList.contains("margin-0")) {
                c.classList.remove("margin-0");
            }
            if (!c.classList.contains("margin-conteudo")) {
                c.classList.add("margin-conteudo");
            }
        });

        todosOsContainers.forEach((container) => {
            if (!container.classList.contains("width-60vw")) {
                container.classList.add("width-60vw");
            }
            if (container.classList.contains("width-80vw")) {
                container.classList.remove("width-80vw");
            }
            if (container.classList.contains("width-96vw")) {
                container.classList.remove("width-96vw");
            }
        });

    } else if (tamanho === "<=860") {
        

        nav.classList.toggle("hidden");



    } else {
        nav.classList.toggle("hidden");

        conteudo.forEach((c) => {
            if (c.classList.contains("margin-0")) {
                c.classList.remove("margin-0");
            }
            if (!c.classList.contains("margin-conteudo")) {
                c.classList.add("margin-conteudo");
            }
        });

        todosOsContainers.forEach((container) => {
            if (!container.classList.contains("width-60vw")) {
                container.classList.add("width-60vw");
            }
            if (container.classList.contains("width-80vw")) {
                container.classList.remove("width-80vw");
            }
            if (container.classList.contains("width-96vw")) {
                container.classList.remove("width-96vw");
            }
        });
    }
};


function atualizarResponsivo() {
    let nav = document.getElementById("nav");
    let conteudo = document.getElementById("conteudo");
    let btnHanburguer = Array.from(document.getElementsByClassName("btn-hanburguer"));
    let btnAbrirNav = Array.from(document.getElementsByClassName("btn-abrir-nav"));

    var larguraDaTela = window.innerWidth;

    if (larguraDaTela <= 1075 && larguraDaTela > 860) {

        /* TELA MEDIA */

        if (!nav.classList.contains("hidden")) {
            nav.classList.add("hidden");
        }
        btnAbrirNav.forEach((btn) => {
            if(btn.classList.contains("hidden")){
                btn.classList.remove("hidden");
            }
        });

        while (conteudo.classList.length > 0) {
            conteudo.classList.remove(conteudo.classList.item(0));
        }
        conteudo.classList.add("conteudo", "margin-0");

        todosOsContainers.forEach((container) => {
            if (container.classList.contains("width-60vw")) {
                container.classList.remove("width-60vw");
            }
            if (!container.classList.contains("width-80vw")) {
                container.classList.add("width-80vw");
            }
            if (container.classList.contains("width-96vw")) {
                container.classList.remove("width-96vw");
            }
        });

        btnHanburguer.forEach((btn) => {
            if (!btn.classList.contains("btns-menu-color-default")) {
                btn.classList.add("btns-menu-color-default");
            }
            if (btn.classList.contains("btns-menu-color-responsivo")) {
                btn.classList.remove("btns-menu-color-responsivo");
            }
        });
        btnAbrirNav.forEach((btn) => {
            if (!btn.classList.contains("btns-menu-color-default")) {
                btn.classList.add("btns-menu-color-default");
            }
            if (btn.classList.contains("btns-menu-color-responsivo")) {
                btn.classList.remove("btns-menu-color-responsivo");
            }
        });

    } else if (larguraDaTela <= 860) {
        
        /* TELA PEQUENA */
        
        if (!nav.classList.contains("hidden")) {
            nav.classList.add("hidden");
        }
        
        if (nav.classList.contains("width-250px")) {
            nav.classList.remove("width-250px");
        }
        if (!nav.classList.contains("width-100vw")) {
            nav.classList.add("width-100vw");
        }
        
        btnAbrirNav.forEach((btn) => {
            if(btn.classList.contains("hidden")){
                btn.classList.remove("hidden");
            }
        });

        while (conteudo.classList.length > 0) {
            conteudo.classList.remove(conteudo.classList.item(0));
        }
        conteudo.classList.add("conteudo", "margin-0");

        todosOsContainers.forEach((container) => {
            if (container.classList.contains("width-60vw")) {
                container.classList.remove("width-60vw");
            }
            if (container.classList.contains("width-80vw")) {
                container.classList.remove("width-80vw");
            }
            if (!container.classList.contains("width-96vw")) {
                container.classList.add("width-96vw");
            }
        });

        btnHanburguer.forEach((btn) => {
            if (btn.classList.contains("btns-menu-color-default")) {
                btn.classList.remove("btns-menu-color-default");
            }
            if (!btn.classList.contains("btns-menu-color-responsivo")) {
                btn.classList.add("btns-menu-color-responsivo");
            }
        });
        btnAbrirNav.forEach((btn) => {
            if (btn.classList.contains("btns-menu-color-default")) {
                btn.classList.remove("btns-menu-color-default");
            }
            if (!btn.classList.contains("btns-menu-color-responsivo")) {
                btn.classList.add("btns-menu-color-responsivo");
            }
        });


    } else {       /* TELA GRANDE */

        if (nav.classList.contains("hidden")) {
            nav.classList.remove("hidden");
            btnAbrirNav.forEach((btn) => {
                if(btn.classList.contains("hidden")){
                    btn.classList.remove("hidden");
                }
            });
        }

        while (conteudo.classList.length > 0) {
            conteudo.classList.remove(conteudo.classList.item(0));
        }
        conteudo.classList.add("conteudo", "margin-conteudo");

        todosOsContainers.forEach((container) => {
            if (!container.classList.contains("width-60vw")) {
                container.classList.add("width-60vw");
            }
            if (container.classList.contains("width-80vw")) {
                container.classList.remove("width-80vw");
            }
            if (container.classList.contains("width-96vw")) {
                container.classList.remove("width-96vw");
            }
        });


        btnHanburguer.forEach((btn) => {
            if (!btn.classList.contains("btns-menu-color-default")) {
                btn.classList.add("btns-menu-color-default");
            }
            if (btn.classList.contains("btns-menu-color-responsivo")) {
                btn.classList.remove("btns-menu-color-responsivo");
            }
        });
        btnAbrirNav.forEach((btn) => {
            if (!btn.classList.contains("btns-menu-color-default")) {
                btn.classList.add("btns-menu-color-default");
            }
            if (btn.classList.contains("btns-menu-color-responsivo")) {
                btn.classList.remove("btns-menu-color-responsivo");
            }
        });

    }
}

function verificarLarguraDaTela() {
    var larguraDaTela = window.innerWidth;

    if (larguraDaTela <= 1075 && larguraDaTela > 860) {
        return "<=1075";
    } else if (larguraDaTela <= 860) {
        return "<=860";
    } else {
        return ">1075"
    }
}

atualizarResponsivo();
window.addEventListener("resize", atualizarResponsivo);
