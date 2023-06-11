//  RIGHT MENU ---------------->>>>>>>>--------------------------------

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
const galleryButtons = document.querySelector('.gallery__buttons');
const galleryBtn = document.querySelectorAll('.gallery__btn');
const galleryItemImg = document.querySelectorAll('.gallery__item-img');
const galleryItemImgResize = document.querySelectorAll('.gallery__item-img--resize');
const firstGalleryItem = document.querySelector('.gallery__item:first-child');


galleryButtons.addEventListener('click', e => {
    if (e.target.className !== 'gallery__btn') {
        return false
    }

    galleryItemImgResize.forEach(element => {
        element.classList.remove('resizeImg');
    });
    if (e.target.getAttribute('data-f') === 'bedroom-furniture') {
        galleryItemImgResize.forEach(element => {
            element.classList.add('resizeImg');
        });
    }

    let filterClass = e.target.dataset['f']

    galleryBtn.forEach(btn => {
        if (btn === e.target) {
            btn.classList.add('gallery-active');
        } else {
            btn.classList.remove('gallery-active');
        }
    });

    filterGallery.forEach(elem => {
        elem.classList.remove('gallery-hide')
        firstGalleryItem.style.gridColumn = 'span 2';
        firstGalleryItem.style.gridRow = 'span 2';
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('gallery-hide')
            firstGalleryItem.style.gridColumn = 'span 1';
            firstGalleryItem.style.gridRow = 'span 1';
        }
    })
})

