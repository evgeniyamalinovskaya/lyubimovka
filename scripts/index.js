
const videoIframe = document.querySelector('.video__iframe');
const previewImage = document.querySelector('.video__preview');
const playButton = document.querySelector('.video__play-btn');

// const imgArrayChange = [
// 	'./image/gallery-grid_pic_1.jpg',
// 	'./image/gallery-grid_pic_2.jpg',
// 	'./image/gallery-grid_pic_3.jpg',
// 	'./image/gallery-grid_pic_4.jpg',
// 	'./image/gallery-grid_pic_5.jpg',
// 	'./image/gallery-grid_pic_6.jpg',
// 	'./image/gallery-grid_pic_7.jpg',
// 	'./image/gallery-grid_pic_8.jpg',
// 	'./image/gallery-grid_pic_9.jpg',
// ]

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
  slidesPerView: 1,
  slidesPerColumn: 0,
  centeredSlides: true,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 1.2,
      
    },
    769: {
      slidesPerView: 1.5,
    },
    1025: {
      slidesPerView: 2,
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
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    440: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    620: {
      slidesPerView: 1.7,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,


//Активация видео и скрытие превью-картинки
function playVideo(evt) {
    videoIframe.classList.add('video__iframe_active');
    previewImage.classList.add('video__preview_disactive');
};

playButton.addEventListener('click', playVideo);

//Анимация картинок блока gallery

  spaceBetween: 0,


  allowTouchMove: true,
});
// const imgArrayChange = [
// 	'./image/gallery-grid_pic_1.jpg',
// 	'./image/gallery-grid_pic_2.jpg',
// 	'./image/gallery-grid_pic_3.jpg',
// 	'./image/gallery-grid_pic_4.jpg',
// 	'./image/gallery-grid_pic_5.jpg',
// 	'./image/gallery-grid_pic_6.jpg',
// 	'./image/gallery-grid_pic_7.jpg',
// 	'./image/gallery-grid_pic_8.jpg',
// 	'./image/gallery-grid_pic_9.jpg',
// ]

// const imgs = document.querySelectorAll(".gallery-grid__pic");

// //Анимация картинок блока gallery

// function updateOneRandomImage() {
// 	var notPresentedImages = [];
// 	var presentedImages = [];
// 	imgs.forEach((element) => {
// 		presentedImages.push(element.getAttribute("src"));
// 	});
// 	for (var i = 0; i <= imgArrayChange.length; i++) {
// 		if (!presentedImages.includes(imgArrayChange[i]))
// 			notPresentedImages.push(imgArrayChange[i]);
// 	}
// 	var imgRnd = Math.floor(Math.random() * imgs.length);
// 	var img = imgs[imgRnd];
// 	var srcRnd = Math.floor(Math.random() * (notPresentedImages.length - 1));
// 	img.classList.remove("visible");
// 	img.classList.add("hidden");
// 	setTimeout(() => { img.src = notPresentedImages[srcRnd]; }, 300);
// 	setTimeout(() => { img.classList.remove("hidden"); }, 300);
// 	setTimeout(() => { img.classList.add("visible"); }, 300);
// };

// setInterval(() => {
// 	updateOneRandomImage();
// }, 3000);

