window.addEventListener("load", function () {
  // AOS적용
  AOS.init();
  // 비지니스 swiper
  const sWBusiness = new Swiper(".swBusiness", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
