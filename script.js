var navToggle = document.getElementById('navToggle');
var navOpenBtn = document.getElementById('navOpenBtn');
var navCloseBtn = document.getElementById('navCloseBtn');
var nav = document.getElementById('nav');

navToggle.addEventListener("click", () => {

    console.log('clicked buttonnnn')

    // nav.style.display = 'initial'

    if(nav.style.display == 'initial') {
        nav.style.display = 'none';
        navCloseBtn.style.display = 'none';
        navOpenBtn.style.display = 'initial';
    } else {
        nav.style.display = 'initial';
        navOpenBtn.style.display = 'none';
        navCloseBtn.style.display = 'initial';
    }
})