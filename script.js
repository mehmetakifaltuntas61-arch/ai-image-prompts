alert("JS ÇALIŞIYOR");
document.addEventListener("DOMContentLoaded", function () {

  // ==============================
  // DEVAMINI GÖSTER / GİZLE
  // ==============================
  const showMoreButtons = document.querySelectorAll(".show-more");

  showMoreButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const text = btn.previousElementSibling;

      text.classList.toggle("expanded");

      if (text.classList.contains("expanded")) {
        btn.innerText = "Gizle";
      } else {
        btn.innerText = "Devamını göster";
      }
    });
  });


  // ==============================
  // KOPYALA BUTONU (GARANTİLİ)
  // ==============================
  const prompts = document.querySelectorAll(".prompt");

  prompts.forEach(function (prompt) {
    const button = prompt.querySelector(".copy-btn");
    const text = prompt.querySelector(".prompt-text");

    button.addEventListener("click", function () {

      // Eski yöntem (her yerde çalışır)
      const textarea = document.createElement("textarea");
      textarea.value = text.innerText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      // Görsel geri bildirim
      const oldText = button.innerText;
      button.innerText = "Kopyalandı ✓";

      if (navigator.vibrate) {
        navigator.vibrate(30);
      }

      setTimeout(function () {
        button.innerText = oldText;
      }, 1200);
    });
  });

});