document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const img = document.getElementById('envelope');
    const carta = document.getElementById('laCarta');
    const ticket = document.getElementById('elTicket');
    const invitacion = document.getElementById('laInvitacion');

    // 1. ABRIR / CERRAR SOBRE
    window.toggleOpen = function() {
        if (!box || !img) return;

        box.classList.toggle('open');

        if (box.classList.contains('open')) {
            img.src = 'sobre-abierto.png';

            if (ticket) ticket.style.transitionDelay = "0.1s";
            if (invitacion) invitacion.style.transitionDelay = "0.1s";
            if (carta) carta.style.transitionDelay = "0.05s";

        } else {
            img.src = 'sobre-cerrado.png';

            if (ticket) {
                ticket.style.transitionDelay = "0s";
                ticket.classList.remove('unfold');
            }

            if (invitacion) {
                invitacion.style.transitionDelay = "0s";
                invitacion.classList.remove('unfold');
            }

            if (carta) {
                carta.style.transitionDelay = "0s";
                carta.classList.remove('unfold');
            }
        }
    };

    // 2. ZOOM CARTA (Parte 1)
    if (carta) {
        carta.addEventListener('click', (e) => {
            if (!box.classList.contains('open')) return;

            e.stopPropagation();
            carta.classList.toggle('unfold');
            if (ticket) ticket.classList.remove('unfold');
            if (invitacion) invitacion.classList.remove('unfold');
        });
    }

    // 3. ZOOM TICKET (Segunda Parte de la Carta)
    if (ticket) {
        ticket.addEventListener('click', (e) => {
            if (!box.classList.contains('open')) return;

            e.stopPropagation();
            ticket.classList.toggle('unfold');
            if (carta) carta.classList.remove('unfold');
            if (invitacion) invitacion.classList.remove('unfold');
        });
    }

    // 4. ZOOM INVITACIÓN
    if (invitacion) {
        invitacion.addEventListener('click', (e) => {
            if (!box.classList.contains('open')) return;

            e.stopPropagation();
            invitacion.classList.toggle('unfold');
            if (carta) carta.classList.remove('unfold');
            if (ticket) ticket.classList.remove('unfold');
        });
    }
});