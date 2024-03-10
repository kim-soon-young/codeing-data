window.onload = function () {
  //상단 스크롤 기능
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mbt");
  const gnbBg = document.getElementById("gnb_bg");
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
      gnbBg.classList.remove("active");

      // // 스크롤이 되었다면
      if (scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
      }else{
        header.classList.remove("active");
        mbt.classList.remove("active");
      }
    } else {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.add("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.add("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.add("active");
      gnbBg.classList.add("active");
    }
  });
};
document.addEventListener("DOMContentLoaded", function () {
  // 메뉴 항목 클릭 시 해당 섹션으로 부드럽게 스크롤
  document.querySelectorAll('.gnb a').forEach(function (menuLink) {
    menuLink.addEventListener('click', function (e) {
      e.preventDefault();

      var targetId = this.getAttribute('href');
      var targetSection = document.querySelector(targetId);
      var targetTop = targetSection.offsetTop;

      // 헤더의 높이를 고려
      var headerHeight = document.querySelector('.header').offsetHeight;
      var adjustedTop = targetTop - headerHeight;

      window.scrollTo({
        top: adjustedTop,
        behavior: 'smooth'
      });
    });
  });
  // 페이지의 첫 번째 섹션에 헤더의 높이만큼 padding-top을 설정
  var firstSection = document.querySelector('.page-1');
  var headerHeight = document.querySelector('.header').offsetHeight;

  if (firstSection) {
    firstSection.style.paddingTop = headerHeight + 'px';
  }
  // 메뉴 항목 클릭 시 해당 섹션으로 부드럽게 스크롤
  document.querySelectorAll('.nav-mb-gnb a').forEach(function (menuLink) {
    menuLink.addEventListener('click', function (e) {
      e.preventDefault();

      var targetId = this.getAttribute('href');
      var targetSection = document.querySelector(targetId);
      var targetTop = targetSection.offsetTop;

      // 헤더의 높이를 고려
      var headerHeight = document.querySelector('.header').offsetHeight;
      var adjustedTop = targetTop - headerHeight;

      window.scrollTo({
        top: adjustedTop,
        behavior: 'smooth'
      });
    });
  });
  // 페이지의 첫 번째 섹션에 헤더의 높이만큼 padding-top을 설정
  var firstSection = document.querySelector('.page-1');
  var headerHeight = document.querySelector('.header').offsetHeight;

  if (firstSection) {
    firstSection.style.paddingTop = headerHeight + 'px';
  }
});
