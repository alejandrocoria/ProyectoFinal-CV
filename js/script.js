function fade(elemento) {
    elemento.classList.remove('fade');
    setTimeout(() => {
        elemento.classList.add('fade');
    }, 0);
}

for (const anchor of document.getElementsByClassName('anchor')) {
    anchor.addEventListener('click', function() {
        let titulo = document.getElementById(anchor.getAttribute('titulo'));
        fade(titulo);
    });
}