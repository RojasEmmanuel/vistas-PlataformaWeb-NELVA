// Detectar dispositivo y cargar diseño adecuado
document.addEventListener('DOMContentLoaded', function() {
    const deviceDetection = document.querySelector('.device-detection');
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    // Añadir clase al body para control preciso
    document.body.classList.add(isMobile ? 'mobile-device' : 'desktop-device');
    
    // Opcional: cargar diferentes recursos según dispositivo
    if (isMobile) {
        console.log('Cargando diseño móvil...');
        // Inicializar componentes móviles
        initMobileComponents();
    } else {
        console.log('Cargando diseño desktop...');
        // Inicializar componentes desktop
        initDesktopComponents();
    }
    
    // Redimensionamiento de pantalla
    window.addEventListener('resize', handleResize);
});

function handleResize() {
    const wasMobile = document.body.classList.contains('mobile-device');
    const isNowMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (wasMobile !== isNowMobile) {
        location.reload(); // Recargar para cambiar diseño completamente
    }
}

function initMobileComponents() {
    // Lógica específica para móvil
    const actionButtons = document.querySelectorAll('.mobile-view .action-btn');
    
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Lógica móvil
        });
    });
}

function initDesktopComponents() {
    // Lógica específica para desktop
    const desktopCards = document.querySelectorAll('.desktop-view .desktop-card');
    
    desktopCards.forEach(card => {
        card.addEventListener('click', function() {
            // Lógica desktop
        });
    });
    
    // Ejemplo: cargar datos via AJAX para desktop
    loadDesktopData();
}

function loadDesktopData() {
    // Ejemplo de carga de datos para vista desktop
    console.log('Cargando datos optimizados para desktop...');
    // fetch('/api/fraccionamientos?view=desktop')...
}