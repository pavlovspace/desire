let headerBtn = document.querySelector('.header__btn');
let rightsideMenu = document.querySelector('.rightside-menu');
let BtnClose = document.querySelector('.rightside-menu__close');

headerBtn.addEventListener('click', function () {
    rightsideMenu.classList.remove('rightside-menu--close')
})

BtnClose.addEventListener('click', function () {
    rightsideMenu.classList.add('rightside-menu--close')
})

let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//  GALLERY- FILTER ---------------->>>>>>>>--------------------------------

const filterGallery = document.querySelectorAll('.gallery__item');

document.querySelector('.gallery__buttons').addEventListener('click', e => {
    if (e.target.className !== 'gallery__btn') return false
    let filterClass = e.target.dataset['f']

    filterGallery.forEach(elem => {
        elem.classList.remove('gallery-hide')
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('gallery-hide')
        }
    })
})