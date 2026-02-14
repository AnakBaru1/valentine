/* --- 1. TYPING EFFECT HERO --- */
const textElement = document.getElementById('typing');
const phrases = ["My Valentine", "My Safe Place", "My Forever"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}
typeEffect();

/* --- 2. SCROLL REVEAL --- */
const reveals = document.querySelectorAll('.reveal, .hero-content, .hero-img');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* --- 3. SURPRISE BUTTON & CONFETTI --- */
const surpriseBtn = document.getElementById('surpriseBtn');
const hiddenMsg = document.getElementById('hiddenMessage');

surpriseBtn.addEventListener('click', () => {
    hiddenMsg.style.display = 'block';
    surpriseBtn.style.display = 'none';
    createConfetti();
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerText = ['❤️', '✨', '🌹', '🍬'][Math.floor(Math.random() * 4)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10vh';
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.zIndex = '9999';
        confetti.style.transition = 'top 3s ease-in, opacity 3s ease-out';

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.top = '110vh';
            confetti.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

/* --- 4. MUSIC PLAYER --- */
const musicToggle = document.getElementById('musicToggle');
const audio = document.getElementById('bgMusic');
const musicText = musicToggle.querySelector('.track-info');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicToggle.classList.remove('playing');
        musicText.textContent = "Play Music";
    } else {
        audio.play();
        musicToggle.classList.add('playing');
        musicText.textContent = "Playing...";
    }
    isPlaying = !isPlaying;
});