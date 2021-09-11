document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-card',{display: 500});
ScrollReveal().reveal('.cards-baner-one',{display: 500});
ScrollReveal().reveal('.cars-baner-two',{display: 500});