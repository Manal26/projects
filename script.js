const texts = document.querySelector(".texts");

window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.lang='ar';

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("السلام عليكم")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "وعليكم السلام ورحمة الله وبركاته";
      texts.appendChild(p);
    }
    if (
      text.includes("ما هو اسمك") ||
      text.includes("ما اسمك")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "انا ادعى السيد روبوت";
      texts.appendChild(p);
    }
    if (
      text.includes("ما هي مهمتك") || text.includes("ماذا تعمل")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = " أقوم بالتجاوب معك ، وأجيب على استفساراتك يا عزيزي";
      texts.appendChild(p);
    }
    if (text.includes("الى اللقاء")|| text.includes("مع السلامة")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "في حفظ الرحمن";
      texts.appendChild(p);
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
