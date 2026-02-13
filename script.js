function openPopup(element){
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupText = document.getElementById("popup-text");

  popup.style.display = "flex";
  popupImg.src = element.src;
  popupText.innerText = element.dataset.text;
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}
function moveButton(btn){
  btn.style.position="absolute";
  btn.style.top=Math.random()*80+"vh";
  btn.style.left=Math.random()*80+"vw";
}

function showLove(){
  document.getElementById("lovePopup").style.display="flex";
  heartExplosion();
}

/* 💗 Floating Soft Hearts */
function createHeart(){
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML="💗";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(20+Math.random()*20)+"px";
  heart.style.animationDuration=(6+Math.random()*6)+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),12000);
}

setInterval(createHeart,500);

/* 💖 Tiny Sparkle Hearts */
function createTinyHeart(){
  const heart=document.createElement("div");
  heart.classList.add("tiny-heart");
  heart.innerHTML="💖";
  heart.style.left=Math.random()*100+"vw";
  heart.style.top=Math.random()*100+"vh";
  heart.style.fontSize=(10+Math.random()*10)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),3000);
}

setInterval(createTinyHeart,800);

/* 💞 Big Explosion When Yes */
function heartExplosion(){
  for(let i=0;i<40;i++){
    const heart=document.createElement("div");
    heart.classList.add("explode-heart");
    heart.innerHTML="💖";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top=Math.random()*100+"vh";
    heart.style.fontSize=(25+Math.random()*30)+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),2000);
  }
}
/* 🎵 Music Control */
document.addEventListener("DOMContentLoaded", function(){

  const music = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");

  if(!music || !musicBtn) return;

  // ใช้ sessionStorage แทน localStorage
  let savedTime = sessionStorage.getItem("musicTime");
  if(savedTime){
    music.currentTime = parseFloat(savedTime);
  }

  let isPlaying = sessionStorage.getItem("musicPlaying") === "true";

  if(isPlaying){
    music.play().catch(()=>{});
    musicBtn.innerHTML = "🔊";
  }

  document.body.addEventListener("click", function startMusic(){
    if(!isPlaying){
      music.volume = 0.7;
      music.play();
      isPlaying = true;
      musicBtn.innerHTML = "🔊";
      sessionStorage.setItem("musicPlaying", "true");
    }
  }, { once:true });

  musicBtn.addEventListener("click", function(e){
    e.stopPropagation();
    if(isPlaying){
      music.pause();
      musicBtn.innerHTML="🔇";
      sessionStorage.setItem("musicPlaying", "false");
    } else {
      music.play();
      musicBtn.innerHTML="🔊";
      sessionStorage.setItem("musicPlaying", "true");
    }
    isPlaying = !isPlaying;
  });

  // บันทึกเวลาทุก 1 วิ
  setInterval(()=>{
    sessionStorage.setItem("musicTime", music.currentTime);
  },1000);

});
function goHome(){
  const music = document.getElementById("bgMusic");

  if(music){
    music.pause();
  }

  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s";

  setTimeout(()=>{
    sessionStorage.clear();
    window.location.href = "index.html";
  },800);
}
function runAway(btn){
  btn.style.position="absolute";
  btn.style.top=Math.random()*80+"vh";
  btn.style.left=Math.random()*80+"vw";
}

function startPrank(){
  document.getElementById("prankBox").style.display="flex";
}


let step = 0;

function nextStep(){
  const text = document.getElementById("prankText");
  const btn = document.getElementById("finalBtn");

  step++;

  if(step === 1){
    text.innerHTML = "คิดดีแล้วใช่มั้ย 😏";
  }

  else if(step === 2){
    text.innerHTML = "กำลังตรวจสอบระบบ...";
  }

  else if(step === 3){
    text.innerHTML = "⚠ ERROR 404: แฟนน่ารักเกินไป 🤯";
  }

  else if(step === 4){
    text.innerHTML = "ล้อเล่นนน 😆";
  }

  else if(step === 5){
    text.innerHTML = "จริง ๆ แล้ว... ขอบคุณที่อยู่ข้างกันนะ รักกันตลอดไปเลยนะ ❤️";
    heartExplosion();

    // 👇 เปลี่ยนปุ่มเฉพาะตอนสุดท้ายเท่านั้น
    btn.innerHTML = "จุ๊บ ๆ 😘";
    btn.onclick = kissAndGo;
  }
}
/* 💖 หัวใจพุ่ง */
function heartExplosion(){
  for(let i=0;i<40;i++){
    const heart=document.createElement("div");
    heart.innerHTML="💖";
    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top=Math.random()*100+"vh";
    heart.style.fontSize=(20+Math.random()*30)+"px";
    heart.style.animation="explode 2s forwards";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),2000);
  }
}
function kissAndGo(){
  sessionStorage.clear();
  window.location.replace("index.html");


  // หยุดเพลงก่อนกลับหน้า
  if(music){
    music.pause();
  }

  // เอฟเฟกต์ fade ออก
  document.body.style.transition = "opacity 0.8s";
  document.body.style.opacity = "0";

  setTimeout(()=>{
    sessionStorage.clear();
    window.location.replace("memories.html");
  },800);
}
document.addEventListener("DOMContentLoaded", function(){
  const music = document.getElementById("bgMusic");

  if(sessionStorage.getItem("musicPlaying") === "true"){
    music.play();
  }

  document.addEventListener("click", function(){
    music.play();
    sessionStorage.setItem("musicPlaying", "true");
  }, { once: true });
});