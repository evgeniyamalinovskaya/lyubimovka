const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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
      601: {
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
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
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
