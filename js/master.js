gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: `.visual`,
      start: `top top`,
      end: `bottom top`,
      scrub: 1,
      pin: true,
      markers: true,
    }
  })
    .to(
      `.visual h1`,
      {
        ease: `none`,
        duration: `10`,
        opacity: `1`,
      },
      5,
    )
    .to(
      `.visual img`,
      {
        ease: `none`,
        duration: `10`,
        opacity: `0.3`,
        scale: `0.4`,
      }
    );

});