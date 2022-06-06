const videoIframe = document.querySelector('.video__iframe');
const playButton = document.querySelector('.video__play-btn');

//Активация видео
function playVideo(evt) {
    videoIframe.classList.add('video__iframe_active')
};

playButton.addEventListener('click', playVideo);
