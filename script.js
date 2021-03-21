const timeline = gsap.timeline({ defaults: { duration: 1 } });

const animate = () => {
    timeline
        .from('header', { y: '-100%', ease: 'bounce' })
        .from('.link', { opacity: '0', stagger: 0.5 })
        .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
        .from('.left', { x: '-100vw' }, '<.5')
        .to('footer', { y: 0, ease: 'elastic' })
        .fromTo(
            'button',
            { opacity: 0, scale: 0, rotation: 720 },
            { opacity: 1, scale: 1, rotation: 0 }
        );
};
const button = document.querySelector('button');

button.addEventListener('click', () => {
    timeline.timeScale(5);
    timeline.reverse();
});

timeline.timeScale(4);
animate();
