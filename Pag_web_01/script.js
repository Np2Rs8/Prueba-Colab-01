function saludo() {
    let nombre = prompt('¿Cómo te llamas?');
    
    if(nombre === null || nombre === '') {
        nombre = 'usuario';
    }

    alert(`Hola ${nombre}`);
}