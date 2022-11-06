function saludo() {
    let nombre = prompt('¿Cómo te llamas?');
    
    if(nombre === null || nombre === '') {
        nombre = 'usuario';
    }

    alert(`Hola ${nombre}`);
}


function texto() {
    let campText = document.querySelector('#campTxt');
    
    if((campText.value).length === 3){
        campText.value = (campText.value - 1) + '\n';
    }
    
}

function texto2() {
    let textArea = document.querySelector('#areaTexto');



    if((textArea.value).length === 88){
        alert((textArea.value).length);
    }
    
}