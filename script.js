gsap.from('header', { duration: 1, y: '-100%', ease: 'bounce' });
gsap.from('.link', { duration: 1, opacity: '0', delay: 0.7, stagger: 0.2 });
gsap.from('.right', {
    duration: 1,
    x: '-100vw',
    delay: 1.5,
    ease: 'power2.in',
});
gsap.from('.left', { duration: 1, x: '-100%', delay: 2, ease: 'power2.in' });
gsap.to('footer', { duration: 1, y: 0, ease: 'elastic', delay: 3.5 });
