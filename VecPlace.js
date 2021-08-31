const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navBarBtn = $('.header__nav-icon');
const headerNav = $('.header__nav');
const checkBtn = $('input[type="checkbox"]');
navBarBtn.addEventListener('click', function(e) {
    headerNav.classList.add('header__nav--active');
})