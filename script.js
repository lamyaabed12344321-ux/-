// زر الوضع الليلي
const modeBtn = document.getElementById("modeBtn");
const body = document.body;

modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if(body.classList.contains("dark")){
    modeBtn.textContent="إيقاف الوضع الليلي ☀️";
  } else {
    modeBtn.textContent="تفعيل الوضع الليلي 🌙";
  }
});

// زر قل مرحباً!
const greetBtn = document.getElementById("greetBtn");
greetBtn.addEventListener("click", () => {
  alert("شكراً لزيارة موقعي! 🌟");
});

// كتابة الاسم تدريجيًا
const title = document.querySelector(".hero h1");
const text = "أهلاً، أنا لمياء ✨";
let i = 0;
title.textContent = "";
function typing(){
  if(i < text.length){
    title.textContent += text.charAt(i);
    i++;
    setTimeout(typing,80);
  }
}
typing();
