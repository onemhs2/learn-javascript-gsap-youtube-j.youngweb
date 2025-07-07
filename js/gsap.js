gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  gsap.timeline({
    scrollTrigger: {
      trigger: `.wrap1 .con02`,
      start: `top 90%`,
      end: `20% 100%`,
      scrub: 2,
      // markers: true,
    }
  })
    .to(`.wrap1 .con02 li:nth-child(1)`, { y: -400, duration: 1, ease: `none` }, 0.2)
    .to(`.wrap1 .con02 li:nth-child(2)`, { y: -400, duration: 1, ease: `none` }, 0.4)
    .to(`.wrap1 .con02 li:nth-child(3)`, { y: -400, duration: 1, ease: `none` }, 0.6)
    .to(`.wrap1 .con02 li:nth-child(4)`, { y: -400, duration: 1, ease: `none` }, 0.8);

  gsap.timeline({
    scrollTrigger: {
      trigger: `.wrap1 .con03`,
      start: `top 100%`,
      end: `100% 100%`,
      scrub: 2,
      // markers: true,
    }
  })
    .fromTo(`.wrap1 .con03 span.a`, { y: `400%` }, { y: 0 }, 1.2)
    .fromTo(`.wrap1 .con03 span.b`, { y: `400%` }, { y: 0 }, 1.4)
    .fromTo(`.wrap1 .con03 span.c`, { y: `400%` }, { y: 0 }, 1.6)
    .fromTo(`.wrap1 .con03 span.d`, { y: `400%` }, { y: 0 }, 1.8)
    .fromTo(`.wrap1 .con03 span.e`, { y: `400%` }, { y: 0 }, 2);

  gsap.timeline({
    scrollTrigger: {
      trigger: `.wrap2 .con02`,
      start: `0% 50%`,
      end: `30% 0%`,
      scrub: 1,
      // markers: true,
    }
  })
    .fromTo(
      `.wrap2 .circle`,
      {
        width: 0,
        height: 0,
        duration: 10,
        ease: `elastic`,
        top: `3%`,
      },
      {
        width: `2500px`,
        height: `2500px`,
        duration: 10,
        top: `30%`,
      },
      0
    );

  gsap.timeline({
    scrollTrigger: {
      trigger: `.con02`,
      start: `0% 80%`,
      end: `100% 80%`,
      scrub: 1,
      // markers: true,
    }
  })
    .fromTo(
      `.wrap2 .text-box`,
      {
        top: `50%`,
        duration: `5`,
        ease: `elastic`,
        opacity: `0`,
      },
      {
        duration: `5`,
        ease: `none`,
        opacity: `1`,
        top: `40%`,
      },
      0
    );
});
