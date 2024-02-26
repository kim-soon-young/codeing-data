// 스크롤 내리면 헤더 고정
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var headerTop = document.querySelector(".header__top");
  var headerBottom = document.querySelector(".header__bottom");

  window.addEventListener("scroll", function () {
    if (window.scrollY > headerTop.clientHeight) {
      headerTop.style.height = "0";
      headerBottom.style.position = "fixed";
      headerBottom.style.top = "0";
    } else {
      headerTop.style.height = "170px";
      headerBottom.style.position = "static";
    }
  });

  // swiper
  var swiper = new Swiper(".sw-main", {
    slidesPerview: 1,
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});

// 햄버거 작동
window.onload = function () {
  //상단 스크롤 기능
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mbt");
  let scy = 0;
  // 2.class 적용 여부 결정
  // 웹버전일때
  window.addEventListener("scroll", function () {
    // 새로 고침 / url 입력해서 html 출력시
    // 1.스크롤바의 픽셀 위치값을 파악해서
    scy = this.document.documentElement.scrollTop;
    if (scy > 0) {
      header.classList.add("active");
      mbt.classList.add("active");
    } else {
      header.classList.remove("active");
      mbt.classList.remove("active");
    }
  });
  // 반응형 (1024px) 햄버거바가 생겼을때
  // 햄버거버튼을 클릭했을때
  const navMb = document.querySelector(".nav-mb");
  const htmlRoot = document.querySelector("html");
  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.remove("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.remove("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.remove("active");
      // // 스크롤이 되었다면
      // if (scy > 0) {
      //   header.classList.add("active");
      //   mbt.classList.add("active");
      // }else{
      //   header.classList.remove("active");
      //   mbt.classList.remove("active");
      // }
    } else {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.add("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.add("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.add("active");
    }
  });
};

// 제이쿼리
$(document).ready(function () {
  $(".main-menu").mouseenter(function () {
    $(".sub-menu li , .navbt").stop().slideDown();
  });
  $(".main-menu").mouseleave(function () {
    $(".sub-menu li , .navbt").stop().slideUp();
  });
});
