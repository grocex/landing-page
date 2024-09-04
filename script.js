 // HEADER ANIMATION
 window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("stick", window.scrollY > 0);
    var nav = document.querySelector("header nav");
    nav.classList.toggle("hscroll", window.scrollY > 0);
});

// NAVBAR

function Menu(e) {
    let list = document.querySelector('nav');
    if (e.name === 'menu') {
    list.classList.remove('opacity-0');
    list.classList.add('opacity-100');
    e.name = 'close';
    } else {
        list.classList.remove('opacity-100');
        list.classList.add('opacity-0');
        e.name = 'menu';
    }
}