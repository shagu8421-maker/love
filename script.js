// ==============================
// Romantic Website for Shagufa ❤️
//
// ==============================

// Typing Effect
const typing = document.getElementById("typing");

const text =
  "Every heartbeat whispers aman, Shagufa ❤️";

let index = 0;

function typeWriter() {

  if (index < text.length) {

    typing.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeWriter, 80);

  }

}

typeWriter();


// ==============================
// Music
// ==============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

  if (!playing) {

    music.play();

    musicBtn.innerHTML = "⏸ Pause Music";

    playing = true;

  } else {

    music.pause();

    musicBtn.innerHTML = "🎵 Play Music";

    playing = false;

  }

});


// ==============================
// Love Counter
// ==============================

// Change this date to your special day ❤️
const loveDate = new Date("2025-01-01 00:00:00");

const counter = document.getElementById("counter");

function updateCounter() {

  const now = new Date();

  const diff = now - loveDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

  const minutes = Math.floor(diff / (1000 * 60)) % 60;

  const seconds = Math.floor(diff / 1000) % 60;

  counter.innerHTML = `
        ❤️ ${days} Days
        <br>
        ${hours} Hours
        ${minutes} Minutes
        ${seconds} Seconds
    `;

}

setInterval(updateCounter, 1000);

updateCounter();


// ==============================
// Surprise Popup
// ==============================

const surpriseBtn = document.getElementById("surpriseBtn");

const popup = document.getElementById("popup");

const closeBtn = document.querySelector(".close");

surpriseBtn.onclick = () => {

  popup.style.display = "block";

  popup.scrollIntoView({

    behavior: "smooth"

  });

};

closeBtn.onclick = () => {

  popup.style.display = "none";

};


// ==============================
// Floating Hearts Generator
// ==============================

setInterval(createHeart, 400);

function createHeart() {

  const heart = document.createElement("div");

  heart.innerHTML = "❤️";

  heart.style.position = "fixed";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.bottom = "-30px";

  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  heart.style.opacity = Math.random();

  heart.style.pointerEvents = "none";

  heart.style.zIndex = "999";

  document.body.appendChild(heart);

  let position = 0;

  const move = setInterval(() => {

    position++;

    heart.style.bottom = position + "px";

    heart.style.transform =
      `translateX(${Math.sin(position / 20) * 40}px)`;

    if (position > window.innerHeight + 100) {

      clearInterval(move);

      heart.remove();

    }

  }, 12);

}


// ==============================
// Scroll Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";

      entry.target.style.transform = "translateY(0px)";

    }

  });

}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

  section.style.opacity = "0";

  section.style.transform = "translateY(60px)";

  section.style.transition = "1s";

  observer.observe(section);

});


// ==============================
// Romantic Greeting
// ==============================

window.onload = () => {

  setTimeout(() => {

    alert(
      "❤️ Welcome Shagufa ❤️\n\nThis little website is made with all my love.\n\nI am sorry if I hurt you.\n\nYou mean everything to me. ❤️"
    );

  }, 1000);

};


// ==============================
// Cursor Hearts
// ==============================

document.addEventListener("mousemove", function(e) {

  if (Math.random() > 0.9) {

    const heart = document.createElement("span");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = e.clientX + "px";

    heart.style.top = e.clientY + "px";

    heart.style.pointerEvents = "none";

    heart.style.fontSize = "18px";

    document.body.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    }, 1000);

  }

});


// ==============================
// Console Message ❤️
// ==============================

console.log(`
❤️========================================❤️

      FOR MY BEAUTIFUL WIFE

           SHAGUFA ❤️

M

❤️========================================❤️
`);