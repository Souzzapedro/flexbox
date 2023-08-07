var radioFlexDirection = document.getElementsByClassName("radio-flex-direction");
var radioFlexWrap = document.getElementsByClassName("radio-flex-wrap");
var container = document.querySelector('.flex-flow');

var flexDirectionArray = Array.from(radioFlexDirection);
var flexWrapArray = Array.from(radioFlexWrap);

/* pres codes*/
const pres = document.querySelectorAll('.pre');
let column_NoWrap = document.getElementsByClassName("column-no-wrap");
let columnReverse_NoWrap = document.getElementsByClassName("column-reverse-no-wrap");
let row_NoWrap = document.getElementsByClassName("row-no-wrap");
let rowReverse_NoWrap = document.getElementsByClassName("row-reverse-no-wrap");
let column_Wrap = document.getElementsByClassName("column-wrap");
let columnReverse_Wrap = document.getElementsByClassName("column-reverse-wrap");
let rowReverse_Wrap = document.getElementsByClassName("row-reverse-wrap");
let row_Wrap = document.getElementsByClassName("row-wrap");
let column_WrapReverse = document.getElementsByClassName("column-wrap-reverse");
let columnReverse_WrapReverse = document.getElementsByClassName("column-reverse-wrap-reverse");
let rowReverse_WrapReverse = document.getElementsByClassName("row-reverse-wrap-reverse");
let row_WrapReverse = document.getElementsByClassName("row-wrap-reverse");

function applyFlexStyles() {
    let flexDirectionValue = '';
    let flexWrapValue = '';

    flexDirectionArray.forEach(radioButton => {
        if (radioButton.checked) {
            flexDirectionValue = radioButton.value;
        }
    });

    flexWrapArray.forEach(radioButton => {
        if (radioButton.checked) {
            flexWrapValue = radioButton.value;
        }
    });

    /* Removendo todas as classes */
    let classes = container.classList;
    container.classList.remove(...classes);

    let tamanhoContainer;
    let btnAbrirNav = document.getElementById("btn-abrir-nav");

    if(btnAbrirNav.classList.contains("hidden")){
        tamanhoContainer = "width-60vh";
    }else {
        tamanhoContainer = "width-85vh";
    }


    container.classList.add('container', 'flex-flow', 'flex', tamanhoContainer, flexDirectionValue, flexWrapValue);
    classes = container.classList;
    
    if (flexDirectionValue == 'direction-column' && flexWrapValue == 'flex-wrap-no-wrap') {
        addHidden();
        for(let i = 0; i < column_NoWrap.length; i++) {
            column_NoWrap[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-column-reverse' && flexWrapValue == 'flex-wrap-no-wrap') {
        addHidden();
        for(let i = 0; i < columnReverse_NoWrap.length; i++) {
            columnReverse_NoWrap[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-row' && flexWrapValue == 'flex-wrap-no-wrap') {
        addHidden();
        for(let i = 0; i < row_NoWrap.length; i++) {
            row_NoWrap[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-row-reverse' && flexWrapValue == 'flex-wrap-no-wrap') {
        addHidden();
        for(let i = 0; i < rowReverse_NoWrap.length; i++) {
            rowReverse_NoWrap[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-column' && flexWrapValue == 'flex-wrap-wrap') {
        addHidden();
        for(let i = 0; i < column_Wrap.length; i++) {
            column_Wrap[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-column-reverse' && flexWrapValue == 'flex-wrap-wrap') {
        addHidden();
        for(let i = 0; i < columnReverse_Wrap.length; i++) {
            columnReverse_Wrap[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-row' && flexWrapValue == 'flex-wrap-wrap') {
        addHidden();
        for(let i = 0; i < row_Wrap.length; i++) {
            row_Wrap[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-row-reverse' && flexWrapValue == 'flex-wrap-wrap') {
        addHidden();
        for(let i = 0; i < rowReverse_Wrap.length; i++) {
            rowReverse_Wrap[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-column' && flexWrapValue == 'flex-wrap-wrap-reverse') {
        addHidden();
        for(let i = 0; i < column_WrapReverse.length; i++) {
            column_WrapReverse[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-column-reverse' && flexWrapValue == 'flex-wrap-wrap-reverse') {
        addHidden();
        for(let i = 0; i < columnReverse_WrapReverse.length; i++) {
            columnReverse_WrapReverse[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-row' && flexWrapValue == 'flex-wrap-wrap-reverse') {
        addHidden();
        for(let i = 0; i < row_WrapReverse.length; i++) {
            row_WrapReverse[i].classList.remove('hidden');
        }
    }
    if (flexDirectionValue == 'direction-row-reverse' && flexWrapValue == 'flex-wrap-wrap-reverse') {
        addHidden();
        for(let i = 0; i < rowReverse_WrapReverse.length; i++) {
            rowReverse_WrapReverse[i].classList.remove('hidden');
        }
    }
}

// Chama a função applyFlexStyles quando qualquer opção é alterada
flexDirectionArray.forEach(radioButton => {
    radioButton.addEventListener('change', applyFlexStyles);
});

flexWrapArray.forEach(radioButton => {
    radioButton.addEventListener('change', applyFlexStyles);
});

/* Adicionar hidden a todos os pre */
function addHidden() {
    pres.forEach(pre => {
        if (!pre.classList.contains('hidden')) {
            pre.classList.add('hidden');
        }
    });
}

// Atualiza os estilos iniciais
applyFlexStyles();
