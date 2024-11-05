window.addEventListener('load', () => {
  gsap.from(".logo",{
    duration: 3,
    opacity: 0,
    y: 150,
    stagger: 0.3,
    ease: "power4.out",
    delay: 0,
  })
  gsap.from(".intro", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out",
    delay: 0.5,
  });


  gsap.from(".container", {
    duration: 3,
    opacity: 0,
    y: 150,
    stagger: 0.3,
    ease: "power4.out",
    delay: 0,
  });
  gsap.from(".main-sentence",{
    duration: 3,
    opacity: 0,
    y: 150,
    stagger: 0.3,
    ease: "power4.out",
    delay: 0,
  })
});

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const mainContent = document.getElementById("main-content");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active"); 
  

  if (menu.classList.contains("active")) {
    mainContent.classList.add("prism-effect");
  } else {
    mainContent.classList.remove("prism-effect");
  }
});