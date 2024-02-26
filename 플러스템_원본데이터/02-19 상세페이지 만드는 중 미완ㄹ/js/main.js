window.addEventListener("load", function () {
  //   top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 2952,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  // 화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function (scTop) {
    scTop = window.document.documentElement.scrollTop;
    if (scTop > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });
});
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
