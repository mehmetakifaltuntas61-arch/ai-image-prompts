document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".prompt").forEach(prompt => {

    const text = prompt.querySelector(".prompt-text");
    const showMore = prompt.querySelector(".show-more");
    const copyBtn = prompt.querySelector(".copy-btn");
    const counter = prompt.querySelector(".counter");

    // DEVAMINI GÖSTER
    showMore.addEventListener("click", () => {
      text.classList.toggle("expanded");
      showMore.innerText = text.classList.contains("expanded")
        ? "Kısalt"
        : "Devamını göster";
    });

    // KOPYALA
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(text.innerText);

      let count = parseInt(counter.innerText) || 0;
      counter.innerText = (count + 1) + " kopyalama";

      copyBtn.innerText = "Kopyalandı ✓";
      setTimeout(() => {
        copyBtn.innerText = "Kopyala";
      }, 1200);
    });

  });

});