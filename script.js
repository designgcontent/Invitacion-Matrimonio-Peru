document.addEventListener('DOMContentLoaded', function() {

    // Actualizado: Ceremonia a las 2:00 PM GMT-0500 (hora de Lima)
    // Sábado 18 de Octubre del 2025, 2:00 PM (14:00)
    const weddingDate = new Date('Oct 18, 2025 14:00:00 GMT-0500').getTime(); // Lima time (GMT-5)
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownEl = document.getElementById('countdown');
    const faltaTitle = document.querySelector('.countdown-section span.falta');
    let countdownInterval;

    const updateCountdown = () => {
        try {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                if (countdownEl) countdownEl.innerHTML = '<p class="fin-cuenta">¡El gran día ha llegado!</p>';
                if (faltaTitle) faltaTitle.style.display = 'none';
                const heartContainer = document.getElementById('lottie-corazon-falta');
                if (heartContainer) heartContainer.style.display = 'none';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (daysEl) daysEl.innerText = days;
            if (hoursEl) hoursEl.innerText = hours;
            if (minutesEl) minutesEl.innerText = minutes;
            if (secondsEl) secondsEl.innerText = seconds;

        } catch (error) {
            console.error("Error en updateCountdown:", error);
            if (countdownEl) countdownEl.innerHTML = "<p>Error al cargar contador</p>";
            if (faltaTitle) faltaTitle.style.display = 'none';
            const heartContainer = document.getElementById('lottie-corazon-falta');
            if (heartContainer) heartContainer.style.display = 'none';
            clearInterval(countdownInterval);
        }
    };

    if (daysEl && hoursEl && minutesEl && secondsEl && countdownEl && faltaTitle) {
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    } else {
        console.warn("Elementos del contador no encontrados. No se iniciará.");
        if (countdownEl && !countdownEl.hasChildNodes()) countdownEl.innerText = "Contador no disponible.";
        if (faltaTitle) faltaTitle.style.display = 'none';
        const heartContainer = document.getElementById('lottie-corazon-falta');
        if (heartContainer) heartContainer.style.display = 'none';
    }

    // Lottie Animations
    const loadLottieAnimation = (container, path, errorMessage, rendererSettings = {}) => {
        if (container) {
            try {
                const anim = lottie.loadAnimation({
                    container: container,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: path,
                    rendererSettings: {
                       preserveAspectRatio: 'xMidYMid meet',
                       ...rendererSettings
                    }
                });
                container.lottieAnim = anim;
            } catch (error) {
                console.error(errorMessage, error);
                if (container) container.innerHTML = '<p style="font-size:10px; color:red;">Err</p>';
            }
        }
    };

    loadLottieAnimation(document.getElementById('lottie-adorno-frase'), 'adorno_frase_portada.json', "Error Lottie Adorno Frase:");
    loadLottieAnimation(document.getElementById('lottie-corazon-falta'), 'corazon-falta.json', "Error Lottie Corazon Falta:");
    loadLottieAnimation(document.querySelector('.col-ceremonia .anim-anillos'), 'img_ceremonia.json', "Error Lottie Anillos (Ceremonia):");
    loadLottieAnimation(document.querySelector('.col-fiesta .anim-fiesta'), 'img_fiesta.json', "Error Lottie Fiesta (Fiesta):");
    loadLottieAnimation(document.querySelector('.anim-galeria'), 'json_camara.json', "Error Lottie Galería:");
    loadLottieAnimation(document.querySelector('.anim-musica'), 'img_musica.json', "Error Lottie Música:");
    loadLottieAnimation(document.querySelector('.anim-musica-modal'), 'img_musica.json', "Error Lottie Música (Modal):");
    loadLottieAnimation(document.querySelector('.anim-vestuario'), 'vestuario.json', "Error Lottie Vestuario:");
    loadLottieAnimation(document.querySelector('.anim-tips'), 'tips.json', "Error Lottie Tips:");
    loadLottieAnimation(document.querySelector('.anim-regalos'), 'img_regalo.json', "Error Lottie Regalos:");
    loadLottieAnimation(document.querySelector('.anim-instagram'), 'img_instagram.json', "Error Lottie Instagram:");
    loadLottieAnimation(document.getElementById('lottie-adorno-galeria'), 'adorno-titulo.json', "Error Lottie Adorno Galeria:");
    loadLottieAnimation(document.getElementById('lottie-adorno-fiesta'), 'adorno-titulo.json', "Error Lottie Adorno Fiesta:");
    loadLottieAnimation(document.getElementById('lottie-adorno-regalos'), 'adorno-titulo.json', "Error Lottie Adorno Regalos:");
    loadLottieAnimation(document.getElementById('lottie-adorno-instagram'), 'adorno-titulo.json', "Error Lottie Adorno Instagram:");
    loadLottieAnimation(document.querySelector('.anim-dresscode-modal'), 'vestuario.json', "Error Lottie Dress Code (Modal):");
    loadLottieAnimation(document.querySelector('.anim-tips-modal'), 'tips.json', "Error Lottie Tips (Modal):");
    loadLottieAnimation(document.querySelector('.anim-regalos-modal'), 'img_regalo.json', "Error Lottie Regalos (Modal):");
    loadLottieAnimation(document.getElementById('lottie-confirmar-ceremonia-anim'), 'img_ceremonia.json', "Error Lottie Confirmar Ceremonia:", { preserveAspectRatio: 'xMidYMid meet' });
    loadLottieAnimation(document.getElementById('lottie-confirmar-fiesta-anim'), 'img_fiesta.json', "Error Lottie Confirmar Fiesta:", { preserveAspectRatio: 'xMidYMid meet' });
    loadLottieAnimation(document.querySelector('.anim-instagram-modal'), 'img_instagram.json', "Error Lottie Instagram (Modal):");

    // Slick Carousel
    if (typeof $ !== 'undefined' && typeof $.fn.slick === 'function') {
        $('.slick-carousel').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px',
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                        centerPadding: '30px'
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '30px'
                    }
                }
            ]
        });
    } else {
        console.error("Error: jQuery o Slick Carousel no están cargados ANTES de script.js.");
    }

    // Fancybox
    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind("[data-fancybox='galeria']", { loop: true });
    } else {
        console.warn("Fancybox no está cargado (opcional).");
    }

    // Generic Modal Handling
    const setupModal = (modalId, openBtnId) => {
        const modal = document.getElementById(modalId);
        const openBtn = document.getElementById(openBtnId);
        const closeBtn = modal ? modal.querySelector('.modal-close') : null;

        const openModal = () => {
            if (modal) {
                modal.style.display = 'flex';
                void modal.offsetWidth; // Trigger reflow
                modal.classList.add('visible');
                document.body.classList.add('modal-open');
            }
        };

        const closeModal = () => {
            if (modal) {
                modal.classList.remove('visible');
                modal.addEventListener('transitionend', function handleTransitionEnd() {
                    if (!modal.classList.contains('visible')) {
                        modal.style.display = 'none';
                    }
                    modal.removeEventListener('transitionend', handleTransitionEnd);
                }, { once: true });
                document.body.classList.remove('modal-open');
            }
        };

        if (openBtn) {
            openBtn.addEventListener('click', (event) => {
                event.preventDefault();
                openModal();
            });
        } else if (openBtnId){
             console.warn(`Botón de apertura no encontrado: ${openBtnId}`);
        }

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        else if (modal) console.warn(`Botón de cierre no encontrado para modal: ${modalId}`);

        if (modal) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) closeModal();
            });
        } else if (modalId) {
             console.warn(`Modal no encontrado: ${modalId}`);
        }
        return { openModal, closeModal };
    };

    // Setup all modals
    const musicaModalControls = setupModal('modal-musica', 'open-musica-modal');
    setupModal('modal-dresscode', 'open-dresscode-modal');
    setupModal('modal-tips', 'open-tips-modal');
    setupModal('modal-regalos', 'open-regalos-modal');
    const ceremoniaConfirmModalControls = setupModal('modal-confirmar-ceremonia', 'open-confirmar-ceremonia-modal');
    const fiestaConfirmModalControls = setupModal('modal-confirmar-fiesta', 'open-confirmar-fiesta-modal');
    setupModal('modal-instagram-profiles', 'open-instagram-profiles-modal');


    // Escape key to close modals
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const visibleModal = document.querySelector('.modal-overlay.visible');
            if (visibleModal) {
                const closeBtn = visibleModal.querySelector('.modal-close');
                if (closeBtn) closeBtn.click();
            }
        }
    });

    // Confirmation Form Handling
    const handleConfirmationForm = (formId, modalControls) => {
        const form = document.getElementById(formId);
        if (!form) {
            console.warn(`Formulario de confirmación no encontrado: ${formId}`);
            return;
        }

        const attendanceButtons = form.querySelectorAll('.attendance-btn');
        const hiddenAttendanceInput = form.querySelector('input[name="asistencia"]');
        const formMessage = form.querySelector('.form-message');
        const nombreInput = form.querySelector('input[name="nombre_asistencia"]');
        const comentarioInput = form.querySelector('input[name="comentario_asistencia"]');
        const eventoInput = form.querySelector('input[name="evento"]');
        const submitButtons = form.querySelectorAll('button[type="submit"]');


        attendanceButtons.forEach(button => {
            button.addEventListener('click', () => {
                attendanceButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                if (hiddenAttendanceInput) hiddenAttendanceInput.value = button.dataset.attendance;
                if (formMessage) { formMessage.style.display = 'none'; formMessage.textContent = ''; }
            });
        });

        if (nombreInput) {
            nombreInput.addEventListener('input', () => {
                if (formMessage && formMessage.textContent.toLowerCase().includes('nombre')) {
                    formMessage.style.display = 'none'; formMessage.textContent = '';
                }
            });
        }

        submitButtons.forEach(submitButton => {
            submitButton.addEventListener('click', function(event) {
                event.preventDefault();
                const submitType = this.value;

                if (formMessage) {
                    formMessage.style.display = 'none'; formMessage.textContent = ''; formMessage.style.color = 'red';
                }

                if (!hiddenAttendanceInput || !hiddenAttendanceInput.value) {
                     if (formMessage) {
                        formMessage.textContent = 'Por favor, selecciona si asistirás o no.';
                        formMessage.style.display = 'block';
                    }
                    return;
                }
                if (!nombreInput || !nombreInput.value.trim()) {
                    if (formMessage) {
                        formMessage.textContent = 'Por favor, ingresa tu nombre completo.';
                        formMessage.style.display = 'block';
                    }
                    if(nombreInput) nombreInput.focus();
                    return;
                }

                const nombre = nombreInput.value.trim();
                const asistenciaValue = hiddenAttendanceInput.value;
                const asistenciaTexto = asistenciaValue === 'si' ? 'Sí, confirmo asistencia' : 'No podré asistir';
                const comentario = comentarioInput ? comentarioInput.value.trim() : '';
                const evento = eventoInput ? eventoInput.value : 'Evento Boda Lima';
                const weddingEmail = 'matrimoniokathayjplima@gmail.com';
                const whatsappNumber = '51993968980';

                if (submitType === 'correo') {
                    const subject = `Confirmación Asistencia Boda K&JP - ${evento}`;
                    let body = `Hola Katha y Juan Pablo,\n\nUna nueva confirmación ha llegado:\n-------------------------------------\n`;
                    body += `Nombre: ${nombre}\nEvento: ${evento}\nAsistencia: ${asistenciaTexto}\n`;
                    if (comentario) body += `Datos adicionales, alergias: ${comentario}\n`;
                    body += `-------------------------------------\n\nSaludos,\n${nombre}`;
                    const mailtoLink = `mailto:${weddingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                    if (formMessage) {
                        formMessage.textContent = 'Gracias. Serás redirigido a tu cliente de correo para enviar la confirmación.';
                        formMessage.style.color = 'green'; formMessage.style.display = 'block';
                    }
                    setTimeout(() => { window.location.href = mailtoLink; }, 500);

                } else if (submitType === 'whatsapp') {
                    let whatsappText = `¡Hola Katha y Juan Pablo! 👋\n\nQuiero confirmar mi asistencia para su boda:\n-------------------------------------\n`;
                    whatsappText += `*Evento:* ${evento}\n`;
                    whatsappText += `*Nombre:* ${nombre}\n`;
                    whatsappText += `*Asistencia:* ${asistenciaTexto}\n`;
                    if (comentario) {
                        whatsappText += `*Datos adicionales, alergias:* ${comentario}\n`;
                    }
                    whatsappText += `-------------------------------------\n¡Nos vemos! 🎉`;

                    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappText)}`;

                    if (formMessage) {
                        formMessage.textContent = 'Gracias. Serás redirigido a WhatsApp para enviar la confirmación.';
                        formMessage.style.color = 'green'; formMessage.style.display = 'block';
                    }
                    setTimeout(() => { window.open(whatsappLink, '_blank'); }, 500);
                }

                setTimeout(() => {
                    if (modalControls && modalControls.closeModal) modalControls.closeModal();
                    form.reset();
                    attendanceButtons.forEach(btn => btn.classList.remove('selected'));
                    if (hiddenAttendanceInput) hiddenAttendanceInput.value = '';
                    if (formMessage) formMessage.style.display = 'none';
                }, 4000);
            });
        });
    };


    if (document.getElementById('form-confirmar-ceremonia')) {
        handleConfirmationForm('form-confirmar-ceremonia', ceremoniaConfirmModalControls);
    }
    if (document.getElementById('form-confirmar-fiesta')) {
        handleConfirmationForm('form-confirmar-fiesta', fiestaConfirmModalControls);
    }

    // Music Suggestion Form Handling
    const handleMusicSuggestionForm = () => {
        const form = document.getElementById('form-sugerir-musica');
        if (!form) {
            console.warn("Formulario de sugerencia de música no encontrado: form-sugerir-musica");
            return;
        }

        const nombreInput = form.querySelector('#nombre_sugerencia');
        const cancionAutorInput = form.querySelector('#cancion_autor');
        const linkCancionInput = form.querySelector('#link_cancion');
        const formMessage = form.querySelector('.form-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (formMessage) {
                formMessage.style.display = 'none';
                formMessage.textContent = '';
                formMessage.style.color = 'red';
            }

            const nombre = nombreInput.value.trim();
            const cancionAutor = cancionAutorInput.value.trim();
            const linkCancion = linkCancionInput.value.trim();

            if (!nombre) {
                if (formMessage) {
                    formMessage.textContent = 'Por favor, ingresa tu nombre.';
                    formMessage.style.display = 'block';
                }
                nombreInput.focus();
                return;
            }
            if (!cancionAutor) {
                if (formMessage) {
                    formMessage.textContent = 'Por favor, ingresa el nombre de la canción y el autor.';
                    formMessage.style.display = 'block';
                }
                cancionAutorInput.focus();
                return;
            }

            const weddingEmail = 'matrimoniokathayjplima@gmail.com';
            const subject = `Sugerencia Musical Boda K&JP (Lima) - ${nombre}`;
            let body = `Hola Katha y Juan Pablo,\n\n${nombre} ha sugerido una canción para la boda en Lima:\n-------------------------------------\n`;
            body += `Canción y Autor: ${cancionAutor}\n`;
            if (linkCancion) {
                body += `Link (opcional): ${linkCancion}\n`;
            }
            body += `-------------------------------------\n\n¡Que siga la música!`;

            const mailtoLink = `mailto:${weddingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            if (formMessage) {
                formMessage.textContent = 'Gracias por tu sugerencia. Serás redirigido a tu cliente de correo.';
                formMessage.style.color = 'green';
                formMessage.style.display = 'block';
            }

            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 500);

            setTimeout(() => {
                if (musicaModalControls && musicaModalControls.closeModal) {
                    musicaModalControls.closeModal();
                }
                form.reset();
                if (formMessage) {
                    formMessage.style.display = 'none';
                }
            }, 4000);
        });
    };

    handleMusicSuggestionForm();


    // Google Calendar Link Generation
    function generateGoogleCalendarLink(details) {
        const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
        const params = new URLSearchParams();
        params.append('text', details.text);
        params.append('dates', details.dates);
        params.append('details', details.details);
        params.append('location', details.location);
        if (details.ctz) {
            params.append('ctz', details.ctz);
        }
        return `${baseUrl}&${params.toString()}`;
    }

    const limaMainEventLocation = "El Tomate De Cieneguilla";
    const limaMainEventDate = "20251018";
    const limaTimeZone = "America/Lima";

    const limaCeremonyEventDetails = {
        text: "Ceremonia Boda K&JP - Lima",
        dates: `${limaMainEventDate}T140000/${limaMainEventDate}T150000`, // 2:00 PM a 3:00 PM
        ctz: limaTimeZone,
        details: "Ceremonia de Nuestra Boda - Katha y Juan Pablo en Lima\nLugar: El Tomate De Cieneguilla\n¡Te esperamos!",
        location: limaMainEventLocation
    };

    const limaPartyEventDetails = {
        text: "Fiesta Boda K&JP - Lima",
        dates: `${limaMainEventDate}T150000/${limaMainEventDate}T235900`, // 3:00 PM hasta la noche
        ctz: limaTimeZone,
        details: "Fiesta de Nuestra Boda - Katha y Juan Pablo en Lima\nLugar: El Tomate De Cieneguilla\n¡A celebrar!",
        location: limaMainEventLocation
    };

    const agendarCeremoniaBtn = document.getElementById('agendar-ceremonia-btn');
    const agendarFiestaBtn = document.getElementById('agendar-fiesta-btn');
    const agendarCeremoniaFooterLink = document.getElementById('agendar-ceremonia-footer-link');
    const agendarFiestaFooterLink = document.getElementById('agendar-fiesta-footer-link');

    if (agendarCeremoniaBtn) {
        agendarCeremoniaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(generateGoogleCalendarLink(limaCeremonyEventDetails), '_blank');
        });
    }
    if (agendarFiestaBtn) {
        agendarFiestaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(generateGoogleCalendarLink(limaPartyEventDetails), '_blank');
        });
    }
    if (agendarCeremoniaFooterLink) {
        agendarCeremoniaFooterLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(generateGoogleCalendarLink(limaCeremonyEventDetails), '_blank');
        });
    }
    if (agendarFiestaFooterLink) {
        agendarFiestaFooterLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(generateGoogleCalendarLink(limaPartyEventDetails), '_blank');
        });
    }

    // Footer Link Handlers for Modals
    const confirmarCeremoniaFooter = document.getElementById('confirmar-ceremonia-footer-link');
    const openConfirmarCeremoniaBtn = document.getElementById('open-confirmar-ceremonia-modal');
    if (confirmarCeremoniaFooter && openConfirmarCeremoniaBtn) {
        confirmarCeremoniaFooter.addEventListener('click', (e) => {
            e.preventDefault();
            openConfirmarCeremoniaBtn.click();
        });
    }

    const confirmarFiestaFooter = document.getElementById('confirmar-fiesta-footer-link');
    const openConfirmarFiestaBtn = document.getElementById('open-confirmar-fiesta-modal');
    if (confirmarFiestaFooter && openConfirmarFiestaBtn) {
        confirmarFiestaFooter.addEventListener('click', (e) => {
            e.preventDefault();
            openConfirmarFiestaBtn.click();
        });
    }

    const sugerirCancionFooter = document.getElementById('sugerir-cancion-footer-link');
    const openMusicaBtn = document.getElementById('open-musica-modal');
    if (sugerirCancionFooter && openMusicaBtn) {
        sugerirCancionFooter.addEventListener('click', (e) => {
            e.preventDefault();
            openMusicaBtn.click();
        });
    }
});