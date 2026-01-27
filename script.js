// ==================================================
// 1. DEVAMINI GÖSTER / GİZLE (TEK TEK)
// ==================================================

const showMore0 = document.querySelectorAll(".show-more")[0];
const showMore1 = document.querySelectorAll(".show-more")[1];
const showMore2 = document.querySelectorAll(".show-more")[2];
const showMore3 = document.querySelectorAll(".show-more")[3];
const showMore4 = document.querySelectorAll(".show-more")[4];
const showMore5 = document.querySelectorAll(".show-more")[5];
const showMore6 = document.querySelectorAll(".show-more")[6];
const showMore7 = document.querySelectorAll(".show-more")[7];
const showMore8 = document.querySelectorAll(".show-more")[8];
const showMore9 = document.querySelectorAll(".show-more")[9];
const showMore10 = document.querySelectorAll(".show-more")[10];
const showMore11 = document.querySelectorAll(".show-more")[11];
const showMore12 = document.querySelectorAll(".show-more")[12];

function toggleText(btn) {
  const text = btn.previousElementSibling;
  text.classList.toggle("expanded");
  btn.innerText = text.classList.contains("expanded")
    ? "Gizle"
    : "Devamını göster";
}

showMore0.onclick = () => toggleText(showMore0);
showMore1.onclick = () => toggleText(showMore1);
showMore2.onclick = () => toggleText(showMore2);
showMore3.onclick = () => toggleText(showMore3);
showMore4.onclick = () => toggleText(showMore4);
showMore5.onclick = () => toggleText(showMore5);
showMore6.onclick = () => toggleText(showMore6);
showMore7.onclick = () => toggleText(showMore7);
showMore8.onclick = () => toggleText(showMore8);
showMore9.onclick = () => toggleText(showMore9);
showMore10.onclick = () => toggleText(showMore10);
showMore11.onclick = () => toggleText(showMore11);
showMore12.onclick = () => toggleText(showMore12);


// ==================================================
// 2. KOPYALA + KALICI SAYAÇ (TEK TEK)
// ==================================================

function setupCopy(index) {
  const prompt = document.querySelectorAll(".prompt")[index];
  const button = prompt.querySelector(".copy-btn");
  const text = prompt.querySelector(".prompt-text");
  const counter = prompt.querySelector(".counter");

  const key = "copyCount_prompt_" + index;
  let count = localStorage.getItem(key);
  count = count ? parseInt(count) : 0;
  counter.innerText = count + " kopyalama";

  button.onclick = () => {
    navigator.clipboard.writeText(text.innerText);
    count = count + 1;
    localStorage.setItem(key, count);
    counter.innerText = count + " kopyalama";
    highlightMostCopied();
  };
}

setupCopy(0);
setupCopy(1);
setupCopy(2);
setupCopy(3);
setupCopy(4);
setupCopy(5);
setupCopy(6);
setupCopy(7);
setupCopy(8);
setupCopy(9);
setupCopy(10);
setupCopy(11);
setupCopy(12);


// ==================================================
// 3. ⭐ EN ÇOK KOPYALANAN PROMPT (TEK TEK KONTROL)
// ==================================================

function highlightMostCopied() {
  const prompts = document.querySelectorAll(".prompt");

  let maxCount = -1;
  let maxIndex = -1;

  let c0 = parseInt(localStorage.getItem("copyCount_prompt_0") || 0);
  let c1 = parseInt(localStorage.getItem("copyCount_prompt_1") || 0);
  let c2 = parseInt(localStorage.getItem("copyCount_prompt_2") || 0);
  let c3 = parseInt(localStorage.getItem("copyCount_prompt_3") || 0);
  let c4 = parseInt(localStorage.getItem("copyCount_prompt_4") || 0);
  let c5 = parseInt(localStorage.getItem("copyCount_prompt_5") || 0);
  let c6 = parseInt(localStorage.getItem("copyCount_prompt_6") || 0);
  let c7 = parseInt(localStorage.getItem("copyCount_prompt_7") || 0);
  let c8 = parseInt(localStorage.getItem("copyCount_prompt_8") || 0);
  let c9 = parseInt(localStorage.getItem("copyCount_prompt_9") || 0);
  let c10 = parseInt(localStorage.getItem("copyCount_prompt_10") || 0);
  let c11 = parseInt(localStorage.getItem("copyCount_prompt_11") || 0);
  let c12 = parseInt(localStorage.getItem("copyCount_prompt_12") || 0);

  const counts = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12];

  prompts.forEach(p => p.style.boxShadow = "none");

  counts.forEach((c, i) => {
    if (c > maxCount) {
      maxCount = c;
      maxIndex = i;
    }
  });

  if (maxIndex !== -1 && maxCount > 0) {
    prompts[maxIndex].style.boxShadow =
      "0 0 25px rgba(245,197,66,0.55)";
  }
}

highlightMostCopied();