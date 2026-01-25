document.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const card = e.target.closest(".prompt-card");
    const text = card.querySelector(".prompt-text").innerText;

    navigator.clipboard.writeText(text).then(() => {
      e.target.innerText = "Kopyalandı ✔";
      setTimeout(() => {
        e.target.innerText = "Kopyala";
      }, 1500);
    });
  }
});
