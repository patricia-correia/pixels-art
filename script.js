function change(event){
  
    let selecionar = document.getElementsByClassName('selected')[0];
    selecionar.classList.remove('selected');
    event.target.classList.add('selected');
    
}
    let changeSelector = document.querySelectorAll('.color');
    for (let i of changeSelector){
     i.addEventListener('click', change);
}