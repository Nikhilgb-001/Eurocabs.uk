const showBtn = document.querySelector(".btn-bars"),
  closeBtn = document.querySelector(".btn-close"),
  navMenu = document.querySelector(".navbar-collapse");
showBtn.addEventListener("click", () => {
  navMenu.classList.add("showMenu");
});
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("showMenu");
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
