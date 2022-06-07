const videoIframe = document.querySelector('.video__iframe');
const previewImage = document.querySelector('.video__preview');
const playButton = document.querySelector('.video__play-btn');


//Активация видео и скрытие превью-картинки
function playVideo(evt) {
    videoIframe.classList.add('video__iframe_active');
    previewImage.classList.add('video__preview_disactive');
};

playButton.addEventListener('click', playVideo);
