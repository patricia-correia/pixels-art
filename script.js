function change(event){ 
    let selecionar = document.getElementsByClassName('selected')[0];
    selecionar.classList.remove('selected');
    event.target.classList.add('selected');   
}
    let changeSelector = document.querySelectorAll('.color');
    for (let i of changeSelector){
     i.addEventListener('click', change);
    }
// Busquei referências no w3schools e stackOverFlow para usar o getComputedStyle para manipular o estilo css do HTML. 
function fixedColor(event){
    const colors = document.querySelector('.selected');
    const cssObj = window.getComputedStyle(colors, null).getPropertyValue("background-color");
    event.target.style.backgroundColor = cssObj;
    
}
    let paintPixels = document.querySelectorAll('.pixel');
        for(let index of paintPixels){
            index.addEventListener('click', fixedColor);
            
        }        
        



