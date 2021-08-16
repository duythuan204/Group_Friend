let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints:{
        568:{
            slidesPerView:3,
        }
    }
});

const buytBtns = document.querySelector('.js-buy-send'),
      modal = document.querySelector('.js-modal'),
      modalclose = document.querySelector('.js-modal-close'),
      modalContainer = document.querySelector('.js-modal-container')

    function showBuySend() {
        modal.classList.add('open')
    }

    function hideBuySend() {
        modal.classList.remove('open')
    }

    modalclose.addEventListener('click', hideBuySend)

    buytBtns.addEventListener('click', showBuySend)

    modal.addEventListener('click',  hideBuySend)

    modalContainer.addEventListener('click', function (event) {
        event.stopPropagation()
    })