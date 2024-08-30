document.addEventListener('DOMContentLoaded', function() {
    var btnMostrarHabilidades = document.getElementById('mostrarHabilidades');
    var divHabilidades = document.getElementById('habilidades');

    btnMostrarHabilidades.addEventListener('click', function() {
        if (divHabilidades.style.display === 'none' || divHabilidades.style.display === '') {
            divHabilidades.style.display = 'block';
            this.textContent = 'Ocultar Habilidades';
        } else {
            divHabilidades.style.display = 'none';
            this.textContent = 'Mostrar Habilidades';
        }
    });
});

