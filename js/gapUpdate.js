function updateGap() {
  let containers = document.getElementsByClassName('container');
  let inputGap = document.getElementById('valueGap').value;
  for(let i = 0; i < containers.length; i++) {
    containers[i].style.gap = inputGap + 'px';
  }
}
function updateGapFixedTela() {
  let containers = document.getElementsByClassName('container');
  let inputGap = document.getElementById('valueGapFixed').value;
  for(let i = 0; i < containers.length; i++) {
    containers[i].style.gap = inputGap + 'px';
  }
}

let inputGap = document.getElementById('valueGap');
let inputGapFixed = document.getElementById('valueGapFixed');

inputGap.addEventListener("focus", function(){
  inputGapFixed.value = '';
  updateGapFixedTela();
  updateGap();
})
inputGapFixed.addEventListener("focus", function(){
  inputGap.value = 0;
  updateGapFixedTela();
  updateGap();
})

