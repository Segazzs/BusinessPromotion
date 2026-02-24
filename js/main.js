const menuOpenBtn = document.getElementById("menu-open-btn");
const modalContent = document.getElementById("modal-content");

menuOpenBtn.addEventListener("click", function () {
  modalContent.classList.toggle("modal-open");
});

console.log(menuOpenBtn);
