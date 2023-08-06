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

    container.classList.add('container', 'flex-flow', 'flex', flexDirectionValue, flexWrapValue);
    classes = container.classList;
    
    if (flexDirectionValue == 'direction-column' && flexWrapValue == 'flex-wrap-no-wrap') {
        addHidden();
        column_NoWrap[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-column-reverse' && flexWrapValue == 'flex-wrap-no-wrap') {
        addHidden();
        columnReverse_NoWrap[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-row' && flexWrapValue == 'flex-wrap-no-wrap') {
        addHidden();
        row_NoWrap[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-row-reverse' && flexWrapValue == 'flex-wrap-no-wrap') {
        addHidden();
        rowReverse_NoWrap[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-column' && flexWrapValue == 'flex-wrap-wrap') {
        addHidden();
        column_Wrap[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-column-reverse' && flexWrapValue == 'flex-wrap-wrap') {
        addHidden();
        columnReverse_Wrap[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-row' && flexWrapValue == 'flex-wrap-wrap') {
        addHidden();
        row_Wrap[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-row-reverse' && flexWrapValue == 'flex-wrap-wrap') {
        addHidden();
        rowReverse_Wrap[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-column' && flexWrapValue == 'flex-wrap-wrap-reverse') {
        addHidden();
        column_WrapReverse[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-column-reverse' && flexWrapValue == 'flex-wrap-wrap-reverse') {
        addHidden();
        columnReverse_WrapReverse[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-row' && flexWrapValue == 'flex-wrap-wrap-reverse') {
        addHidden();
        row_WrapReverse[0].classList.remove('hidden');
    }
    if (flexDirectionValue == 'direction-row-reverse' && flexWrapValue == 'flex-wrap-wrap-reverse') {
        addHidden();
        rowReverse_WrapReverse[0].classList.remove('hidden');
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
