window.onload = function(){
    const menu_btn = document.querySelector('.hamburger-menu');
    const nav_mobile = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        nav_mobile.classList.toggle('is-active');

        document.body.classList.toggle('no-scroll', nav_mobile.classList.contains('is-active'));
    })
}