var testimonialSlider = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        1199: { slidesPerView: 2.5 },
        1020: { slidesPerView: 2 },
        320: { slidesPerView: 1 },
    }
})