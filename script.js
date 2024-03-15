const developerText = document.getElementById('developer-text');
const text = developerText.innerText;
developerText.innerText = '';

let index = 0;

function showText() {
    developerText.innerText = text.substring(0, index);
    index++;
    if (index > text.length) index = 1;
}

setInterval(showText, 380);

/*document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navItems = document.querySelector('.nav-items');

    menuBtn.addEventListener('click', function() {
        navItems.classList.toggle('show');
    });
});*/
window.addEventListener('scroll', function() {
    var firstSectionHeight = window.innerHeight;
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    var button = document.getElementById('scrollToTopBtn');

    if (scrollTop > firstSectionHeight) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}