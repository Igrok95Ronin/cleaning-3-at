// Получить модальный
const modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
const btn = document.querySelectorAll("#myBtn");
// Получить элемент <span>, который закрывает модальный
const span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.forEach(elem => {
  elem.addEventListener('click', () => {
    modal.style.display = "block";
  })
})


// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = () => {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.addEventListener('click', e => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
})


$(document).ready(function(){
  $('.howWorks__box').slick({
      infinite: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },

        ]
  });
});
$(document).ready(function(){
  $('.results__box').slick({
      infinite: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,

  });
});