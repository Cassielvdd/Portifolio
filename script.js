const titu = document.querySelector(".typing");

function escrevendo() {
  function typing(el) {
    const arrayText = el.innerHTML.split("");
    el.innerHTML = "";
    arrayText.forEach((letra, i) => {
      setTimeout(() => {
        el.innerHTML += letra;
      }, 75 * i);
    });
  }

  typing(titu);
}
escrevendo();

const mobileMenu = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".nav-primary");
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("fa-xmark");
  navMenu.classList.toggle("active");
});
