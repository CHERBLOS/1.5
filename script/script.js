let mediaQuerySize = window.screen.width;
const buttonMore = document.querySelector('.brands__button')
const minimizerList = document.querySelector('.brands__container');
let swiper;

buttonMore.addEventListener('click', function(){
  minimizerList.classList.toggle('brands__minimized');
  buttonMore.classList.toggle('brands__button--active')

  if (minimizerList.classList.contains('brands__minimized')){
    buttonMore.textContent = 'Показать все';
  } else {
    buttonMore.textContent = 'Скрыть'; 
  }
});

const swiperEnable = function(){
  if (mediaQuerySize < 768){
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1.25,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
      },
    });
  } else if(swiper = undefined){
    swiper.destroy();
  }
};


window.addEventListener("resize", function(){
  mediaQuerySize = window.screen.width;
  swiperEnable();
});
swiperEnable();
