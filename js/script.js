// Referencias de elementos
const openBtn = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const music = document.getElementById("backgroundMusic");
const muteBtn = document.getElementById("muteBtn");
const card = document.querySelector(".main-card");

// FUNCIÓN PRINCIPAL AL ABRIR
openBtn.addEventListener("click", () => {
    // 1. Activar Pantalla Completa
    activarPantallaCompleta();

    // 2. Iniciar Música
    music.volume = 0.4;
    music.play();

    // 3. Efecto de transición (Desaparece el Cover)
    cover.style.opacity = "0";
    cover.style.transform = "scale(1.2)";
    
    setTimeout(() => {
        cover.style.display = "none";
        invitation.classList.remove("hidden");
        // Quitamos el bloqueo del scroll del body
        document.body.style.overflow = "auto";
        // Activamos la animación de la tarjeta
        card.classList.add("show-invitation");
    }, 1000);
});

// CONTROL DE MÚSICA (MUTE)
muteBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        muteBtn.textContent = "🔊";
    } else {
        music.pause();
        muteBtn.textContent = "🔇";
    }
});

// FUNCIÓN PARA PANTALLA COMPLETA
function activarPantallaCompleta() {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.webkitRequestFullscreen) { // Safari
        docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) { // IE/Edge
        docElm.msRequestFullscreen();
    }
}