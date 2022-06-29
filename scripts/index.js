
//Бургерное меню
const iconMenu = document.querySelector('.header__menu-icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu-body');
    iconMenu.addEventListener('click', function(){
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })  
}
const imgArrayChange = [
	'./image/gallery-grid_pic_1.jpg',
	'./image/gallery-grid_pic_2.jpg',
	'./image/gallery-grid_pic_3.jpg',
	'./image/gallery-grid_pic_4.jpg',
	'./image/gallery-grid_pic_5.jpg',
	'./image/gallery-grid_pic_6.jpg',
	'./image/gallery-grid_pic_7.jpg',
	'./image/gallery-grid_pic_8.jpg',
	'./image/gallery-grid_pic_9.jpg',
]

const imgs = document.querySelectorAll(".gallery-grid__pic");

const videoContainer = document.querySelector('.video__container');
const previewImage = videoContainer.querySelector('.video__preview');
const playVideoButton = videoContainer.querySelector('.video__play-btn');

//Создание iframe для воспроизведения видео
function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/juq_3oRQ6yc?rel=0&showinfo=0&autoplay=1');
  iframe.classList.add('video__iframe');

  return iframe;
}

playVideoButton.addEventListener('click', () => {
  let iframe = createIframe();

  previewImage.remove();
  playVideoButton.remove();
  videoContainer.appendChild(iframe);
});




const swiper = new Swiper('.reviews', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slideClass: 'reviews__slide',
  slideActiveClass: 'reviews__slide_active',
  wrapperClass: 'reviews__wrapper',
  // If we need pagination
  pagination: {
    el: '.pagination',
    type: 'bullets',
    dynamicBullets: true,
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  centeredSlides: true,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
    },
    1025: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    }
  },
  allowTouchMove: true,
});
const swiperComments = new Swiper('.comments', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slideClass: 'comments__slide',
  slideActiveClass: 'comments__slide_active',
  wrapperClass: 'comments__wrapper',
  // If we need pagination
  pagination: {
    el: '.pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: 1.7,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//Анимация картинок блока gallery
  allowTouchMove: true,
});


//-секция play, смена цвета стрелок
const playFirstImg = document.querySelector('.play__firstimg');
const playSecondImg = document.querySelector('.play__secondimg');
const playButton = document.querySelector('.play__fistbutton');
const playSecondButton = document.querySelector('.play__secondbutton');

 function onMouseIcon(){
    playFirstImg.src="./image/arrow_45_negate.png";
}
function outMouseIcon(){
	playFirstImg.src="./image/arrow-45.png";
}
function onMouseIconComm(){
	playSecondImg.src="./image/arrow_down_negate.png";
}
function outMouseIconComm(){
	playSecondImg.src="./image/arrow-down.png";
}
 
playButton.onmouseover=onMouseIcon;
playButton.onmouseout=outMouseIcon;

playSecondButton.onmouseover=onMouseIconComm;
playSecondButton.onmouseout=outMouseIconComm;
// конец секции play 



//Анимация картинок блока gallery

function updateOneRandomImage() {
	var notPresentedImages = [];
	var presentedImages = [];
	imgs.forEach((element) => {
		presentedImages.push(element.getAttribute("src"));
	});
	for (var i = 0; i <= imgArrayChange.length; i++) {
		if (!presentedImages.includes(imgArrayChange[i]))
			notPresentedImages.push(imgArrayChange[i]);
	}
	var imgRnd = Math.floor(Math.random() * imgs.length);
	var img = imgs[imgRnd];
	var srcRnd = Math.floor(Math.random() * (notPresentedImages.length - 1));
	img.classList.remove("visible");
	img.classList.add("hidden");
	setTimeout(() => { img.src = notPresentedImages[srcRnd]; }, 300);
	setTimeout(() => { img.classList.remove("hidden"); }, 300);
	setTimeout(() => { img.classList.add("visible"); }, 300);
};

setInterval(() => {
	updateOneRandomImage();
}, 3000);

