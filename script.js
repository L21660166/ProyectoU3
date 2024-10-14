// Función para alternar la visibilidad de la barra lateral
function toggleSidebar() {
    // Obtener el elemento de la barra lateral usando su ID
    var sidebar = document.getElementById("sidebar");
    // Obtener el elemento del contenido principal
    var mainContent = document.getElementById("main-content");

    // Verificar si la barra lateral tiene la clase 'open'
    if (sidebar.classList.contains("open")) {
        // Si la clase 'open' está presente, la eliminamos
        sidebar.classList.remove("open");
        // Ajustar el margen izquierdo del contenido principal al cerrar la barra lateral
        mainContent.style.marginLeft = "60px";
    } else {
        // Si la clase 'open' no está presente, la añadimos
        sidebar.classList.add("open");
        // Ajustar el margen izquierdo del contenido principal al abrir la barra lateral
        mainContent.style.marginLeft = "250px";
    }
}

// Función para abrir un modal con un iframe que carga una URL
function openModal(url) {
    // Cambiar la fuente del iframe del modal a la URL proporcionada
    document.getElementById("modal-iframe").src = url;
    // Mostrar el modal estableciendo su estilo de visualización a 'flex'
    document.getElementById("myModal").style.display = "flex";
}

// Función para cerrar el modal
function closeModal() {
    // Ocultar el modal estableciendo su estilo de visualización a 'none'
    document.getElementById("myModal").style.display = "none";
    // Limpiar la fuente del iframe para detener la reproducción de contenido
    document.getElementById("modal-iframe").src = "";
}

// Evento para cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    // Obtener el elemento del modal
    var modal = document.getElementById("myModal");
    // Verificar si el objetivo del clic es el modal
    if (event.target == modal) {
        // Si es así, cerrar el modal
        modal.style.display = "none";
        // Limpiar la fuente del iframe
        document.getElementById("modal-iframe").src = "";
    }
}

// Evento para cerrar el modal si se presiona la tecla Escape
window.onkeydown = function(event) {
    // Verificar si la tecla presionada es "Escape"
    if (event.key === "Escape") {
        // Llamar a la función closeModal para cerrar el modal
        closeModal();
    }
}

// Función para mostrar una sección específica y ocultar las demás
function showSection(sectionId) {
    // Obtener todos los elementos con la clase 'section'
    var sections = document.getElementsByClassName('section');
    // Recorrer todos los elementos de la sección
    for (var i = 0; i < sections.length; i++) {
        // Ocultar cada sección estableciendo su estilo de visualización a 'none'
        sections[i].style.display = 'none';
    }
    // Mostrar la sección especificada por el ID proporcionado
    document.getElementById(sectionId).style.display = 'block';
    
    // Mapa para actualizar el título de la barra de herramientas según la sección activa
    var titleMap = {
        'home': 'Inicio',
        'services': 'Servicios',
        'about': 'Sobre Mi',
        'contact': 'Contacto'
    };
    // Actualizar el título del dashboard utilizando el ID de la sección
    document.getElementById('dashboard-title').innerText = titleMap[sectionId] || 'Dashboard';
}
