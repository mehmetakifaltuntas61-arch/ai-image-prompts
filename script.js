// =====================================
// DEVAMINI GÖSTER / GİZLE
// =====================================
const showMoreButtons = document.querySelectorAll(".show-more");

showMoreButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.previousElementSibling;
    text.classList.toggle("expanded");

    btn.innerText = text.classList.contains("expanded")
      ? "Gizle"
      : "Devamını göster";
  });
});


// =====================================
// KOPYALA BUTONU (SADECE KOPYALAMA)
// =====================================
const prompts = document.querySelectorAll(".prompt");

prompts.forEach(prompt => {
  const button = prompt.querySelector(".copy-btn");
  const text = prompt.querySelector(".prompt-text");

  button.addEventListener("click", () => {
    navigator.clipboard.writeText(text.innerText);

    // Kısa geri bildirim
    const oldText = button.innerText;
    button.innerText = "Kopyalandı ✓";

    if (navigator.vibrate) {
      navigator.vibrate(30);
    }

    setTimeout(() => {
      button.innerText = oldText;
    }, 1200);
  });
});