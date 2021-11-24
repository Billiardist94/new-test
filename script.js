const swiper1 = new Swiper(".swiper1", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

const swiper2 = new Swiper(".swiper2", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

const swiper3 = new Swiper(".swiper3", {
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
      },
      grabCursor: true,
      
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        // when window width is >= 425px
        425: {
        slidesPerView: 2,
        spaceBetween: 30
        },
        // when window width is >= 576px
        576: {
        slidesPerView: 3,
        spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
        slidesPerView: 3,
        spaceBetween: 20
        },
        // when window width is >= 992px
        992: {
        slidesPerView: 4,
        spaceBetween: 20
        },
    },
});
