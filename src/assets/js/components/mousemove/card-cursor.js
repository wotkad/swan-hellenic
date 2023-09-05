import { gsap } from "gsap";

function mousemoveCardCursor() {
  const imageContainers = document.querySelectorAll('.card__image');
  const bubbles = document.querySelectorAll('.card__bubble');
  imageContainers.forEach((container, index) => {
    const bubble = bubbles[index];
    container.addEventListener('mouseenter', () => {
      gsap.to(bubble, { opacity: 1, duration: 0.3, ease: "power2.out" });
    });
    container.addEventListener('mousemove', (e) => {
      const x = e.clientX - container.getBoundingClientRect().left - bubble.clientWidth / 2;
      const y = e.clientY - container.getBoundingClientRect().top - bubble.clientHeight / 2;
      gsap.to(bubble, { x, y, duration: 1, ease: "power2.out" });
    });
    container.addEventListener('mouseleave', () => {
      gsap.to(bubble, { opacity: 0, duration: 0.3, ease: "power2.out" });
    });
  });
}
mousemoveCardCursor();