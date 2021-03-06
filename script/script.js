const minimizerList = document.querySelector('.brands__container');
const buttonMore = minimizerList.nextElementSibling;

buttonMore.addEventListener('click', function btnMore(){
  minimizerList.classList.toggle('brands__minimized');
  buttonMore.classList.toggle('brands__button--active')

  if (minimizerList.classList.contains('brands__minimized')){
    buttonMore.textContent = 'Показать все';
  } else {
    buttonMore.textContent = 'Скрыть'; 
  }
});

document.addEventListener('DOMContentLoaded', function load(){
  if (window.screen.width < 768){
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1.17,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
      },
    });
  }
})

