const scrollingLogos = document.querySelector('.scrolling-logos');

// Pause scrolling on hover
scrollingLogos.addEventListener('mouseover', () => {
    scrollingLogos.style.animationPlayState = 'paused';
});

// Resume scrolling when hover ends
scrollingLogos.addEventListener('mouseout', () => {
    scrollingLogos.style.animationPlayState = 'running';
});

