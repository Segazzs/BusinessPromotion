const questionIcons = document.querySelectorAll(".question-icon");

questionIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const item = icon.closest(".question-item");
    const line = item.querySelector(".question-line");
    const answer = item.querySelector(".question-answer");

    line.classList.toggle("rotate");
    answer.classList.toggle("open");
  });
});
