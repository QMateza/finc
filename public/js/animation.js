gsap.registerPlugin(Observer);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

let split = SplitText.create(".split", {
  type: "lines, words",
  mask: "lines",
});

const tl = gsap.timeline({
duration: 1,

})

tl.from(".logo", {
  y: -50,
  opacity: 0,
})
    .from(".menu", {
      y: -50,
      opacity: 0
    }, "-=0.08")
    .from(split.words, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    }, "-=0.6");

gsap.fromTo(
  ".hero-image",
  {
    y: 0,
  },
  {
    y: 100,
    scrollTrigger: {
      trigger: ".hero-image",
      start: "center center",
      scrub: true,
    },
  },
);

let count = 0;

document.querySelectorAll(".fade-up-group").forEach((group) => {
  const items = group.querySelectorAll(".fade-up");
  gsap.fromTo(
    items,
    {
      opacity: 0,
      y: 50,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: items,
      },
    },
  );
});

if (window.innerWidth > 768) {
  document.querySelectorAll(".value-image-item").forEach((element) => {
    const xOffset = element.classList.contains("val-lft")
      ? -200 - Math.floor(window.innerWidth / 50)
      : 200 + Math.floor(window.innerWidth / 50);

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 0,
        scale: 0.6,
      },
      {
        opacity: 1,
        x: xOffset,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          scrub: 0.5,
          trigger: element,
          start: "top bottom",
          end: "bottom 50%",
        },
      },
    );
  });
}

document
  .querySelectorAll(".social2-number-item span[data-stat]")
  .forEach((element) => {
    const target = Number(element.getAttribute("data-stat"));
    const counter = { value: 0 };

    gsap.to(counter, {
      value: target,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
      onUpdate: () => {
        element.textContent = Math.round(counter.value).toLocaleString();
      },
    });
  });

const ctaArr = document.querySelectorAll(".cta")

    const hoverAnim = gsap.to(".cta", {
        duration: .4,
        backgroundColor: "#903349",
        scale: 0.995,
        ease: "power3.in",
        paused: true
    })

ctaArr.forEach(cta => {
    cta.addEventListener("mouseenter", () => (hoverAnim.play()));
    cta.addEventListener("mouseleave", () => (hoverAnim.reverse()));
})


