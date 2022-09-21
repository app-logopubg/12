//window.alert('88')
////////////////////////////////////////////////////
let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let container = document.querySelector('.container');
////////////////////////////////////////////////////
let btnOpen1 = document.getElementById('open1');
let btnClose1 = document.getElementById('close1');
let container1 = document.querySelector('.container1');
//////////////////////////////////////////////////////
btnOpen.onclick = function(){
    this.classList.add('hide');
    btnClose.classList.remove('hide');
    container.classList.remove('hide');
}
btnClose.onclick = function(){
    container.classList.add('hide');
    this.classList.add('hide');
    btnOpen .classList.remove('hide');
}
/////////////////////////////////////////////////////
btnOpen1.onclick = function(){
    this.classList.add('hide1');
    btnClose1.classList.remove('hide1');
    container1.classList.remove('hide1');
}
btnClose1.onclick = function(){
    container1.classList.add('hide1');
    this.classList.add('hide1');
    btnOpen1.classList.remove('hide1');
}
//////////////////////////////////////////////////////