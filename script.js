function loadinganimation() {
    gsap.from("#texta h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#vid .video", {
      scale: 0.9,
      opacity: 0,
      delay: 1,
      duration: 0.5,
    });
    gsap.from(".feature #textaa h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3,
      });
  }
  loadinganimation();

Shery.mouseFollower();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
