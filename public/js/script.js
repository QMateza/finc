gsap.registerPlugin(Observer);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

let split = SplitText.create(".split", {
  type: "lines, words",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.words, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  },
});

SplitText.create(".animate", {
  type: "lines, words",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.words, {
      duration: 1,
      x: 100,
      autoAlpha: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".animate",
        start: "top bottom",
        end: "+=100px",
      },
    });
  },
});
const setUpPage = () => {
  document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("isOpen");
  });
};

window.addEventListener("load", setUpPage);
