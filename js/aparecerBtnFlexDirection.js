let toogle1 = true;

let AlterarFlexDirection = document.getElementsByClassName("btn-aparecerBtnFlexDirection");
for(let i = 0; i < AlterarFlexDirection.length; i++){
    
    AlterarFlexDirection[i].addEventListener('click', function() {

        toogle1 = !toogle1;

        let prePadrao = document.getElementsByClassName("pre-padrao");
        let btnFlexDirection = document.getElementsByClassName("btn-flex-direction");
        let aparecerFlexDirection = document.getElementsByClassName("aparecer-flex-direction");
        
        console.log(btnFlexDirection);

        for( let i = 0; i < prePadrao.length; i++) {
            if(toogle1) {
                prePadrao[i].classList.remove("hidden");
                aparecerFlexDirection[i].classList.add("hidden");
                btnFlexDirection[i].classList.add("hidden");
            }else {
                prePadrao[i].classList.add("hidden");
                aparecerFlexDirection[i].classList.remove("hidden");
                btnFlexDirection[i].classList.remove("hidden");
            }
        }
    });
}   