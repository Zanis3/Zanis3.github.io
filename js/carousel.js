//CAROUSEL WAS MADE USING SWIPERJS

const swiper = new Swiper('.swiper', {

    //carousel settings
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
  
    //pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        1280:{
            slidesPerView:2,
        },
    },

    autoplay: {
        delay: 3000,
    },
  });