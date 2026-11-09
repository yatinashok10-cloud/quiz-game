"use strict";

const Q = [
  ["Computers", "What does RAM stand for?", "Random Access Memory", ["Read Access Memory", "Rapid Access Memory", "Run Access Memory"]],
  ["Computers", "What does ROM stand for?", "Read Only Memory", ["Random Only Memory", "Read Output Memory", "Run Only Memory"]],
  ["Computers", "What does PSU stand for?", "Power Supply Unit", ["Power Storage Unit", "Primary Supply Unit", "Processor Supply Unit"]],
  ["Computers", "What does CPU stand for?", "Central Processing Unit", ["Central Program Unit", "Computer Processing Unit", "Control Power Unit"]],
  ["Computers", "What does GPU stand for?", "Graphics Processing Unit", ["General Processing Unit", "Graphical Power Unit", "Graphics Program Unit"]],
  ["Computers", "Which number system do computers use internally?", "Binary", ["Decimal", "Octal", "Hexadecimal"]],
  ["Computers", "What does HTML stand for?", "HyperText Markup Language", ["HighText Machine Language", "HyperTool Multi Language", "Hyperlinks and Text Markup Language"]],
  ["Computers", "Which of these is an output device?", "Monitor", ["Keyboard", "Mouse", "Scanner"]],
  ["Computers", "Who is known as the father of the computer?", "Charles Babbage", ["Bill Gates", "Steve Jobs", "Tim Berners-Lee"]],
  ["Computers", "How many bits are in one byte?", "8", ["4", "16", "10"]],

  ["Physics", "What is the SI unit of force?", "Newton", ["Joule", "Watt", "Pascal"]],
  ["Physics", "What is the approximate speed of light?", "3 x 10^8 m/s", ["3 x 10^6 m/s", "3 x 10^10 m/s", "3 x 10^4 m/s"]],
  ["Physics", "What is the approximate acceleration due to gravity on Earth?", "9.8 m/s^2", ["1.6 m/s^2", "3.7 m/s^2", "98 m/s^2"]],
  ["Physics", "Who proposed the three laws of motion?", "Isaac Newton", ["Albert Einstein", "Galileo Galilei", "Michael Faraday"]],
  ["Physics", "What is the SI unit of electric current?", "Ampere", ["Volt", "Ohm", "Coulomb"]],
  ["Physics", "Which law is written as V = IR?", "Ohm's law", ["Newton's law", "Faraday's law", "Boyle's law"]],

  ["Chemistry", "What is the chemical symbol for gold?", "Au", ["Ag", "Gd", "Go"]],
  ["Chemistry", "What is the atomic number of carbon?", "6", ["12", "8", "4"]],
  ["Chemistry", "What is the pH of pure water at 25 degrees C?", "7", ["0", "14", "10"]],
  ["Chemistry", "Which gas is the most abundant in Earth's atmosphere?", "Nitrogen", ["Oxygen", "Carbon dioxide", "Argon"]],
  ["Chemistry", "What is the chemical formula of table salt?", "NaCl", ["KCl", "NaOH", "CaCl2"]],
  ["Chemistry", "Who is credited with creating the periodic table?", "Dmitri Mendeleev", ["John Dalton", "Niels Bohr", "Antoine Lavoisier"]],

  ["Biology", "Which part of the cell is called the powerhouse of the cell?", "Mitochondria", ["Nucleus", "Ribosome", "Golgi apparatus"]],
  ["Biology", "Which blood group is the universal donor?", "O negative", ["AB positive", "A positive", "B negative"]],
  ["Biology", "What is the process by which plants make their food?", "Photosynthesis", ["Respiration", "Transpiration", "Digestion"]],
  ["Biology", "How many chambers does the human heart have?", "4", ["2", "3", "5"]],
  ["Biology", "Which vitamin does the skin make from sunlight?", "Vitamin D", ["Vitamin A", "Vitamin C", "Vitamin K"]],
  ["Biology", "What does DNA stand for?", "Deoxyribonucleic acid", ["Dioxyribonucleic acid", "Deoxyribonitric acid", "Diribonucleic acid"]],

  ["Maths", "What is the approximate value of pi?", "3.14", ["2.71", "1.62", "3.41"]],
  ["Maths", "What is the square root of 144?", "12", ["14", "16", "11"]],
  ["Maths", "What is the sum of the angles in a triangle?", "180 degrees", ["90 degrees", "270 degrees", "360 degrees"]],
  ["Maths", "What is the derivative of sin x?", "cos x", ["-cos x", "-sin x", "tan x"]],
  ["Maths", "What is 15% of 200?", "30", ["15", "20", "45"]],
  ["Maths", "What is the smallest prime number?", "2", ["0", "1", "3"]],
  ["Maths", "What is the value of log base 10 of 1000?", "3", ["2", "10", "1000"]],
  ["Maths", "What is the area of a circle with radius r?", "pi * r^2", ["2 * pi * r", "pi * r", "2 * pi * r^2"]],

  ["Geography", "What is the capital of Australia?", "Canberra", ["Sydney", "Melbourne", "Perth"]],
  ["Geography", "Which is the largest ocean on Earth?", "Pacific Ocean", ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]],
  ["Geography", "Which is the highest mountain peak in the world?", "Mount Everest", ["K2", "Kangchenjunga", "Makalu"]],
  ["Geography", "On which continent is the Sahara Desert?", "Africa", ["Asia", "Australia", "South America"]],
  ["Geography", "Which is the largest state in India by area?", "Rajasthan", ["Madhya Pradesh", "Maharashtra", "Uttar Pradesh"]],
  ["Geography", "Which imaginary line divides Earth into the Northern and Southern Hemispheres?", "Equator", ["Prime Meridian", "Tropic of Cancer", "International Date Line"]],

  ["History", "Who was the first Prime Minister of India?", "Jawaharlal Nehru", ["Mahatma Gandhi", "Sardar Patel", "B. R. Ambedkar"]],
  ["History", "In which year did India gain independence?", "1947", ["1942", "1950", "1935"]],
  ["History", "Who wrote the Indian national anthem?", "Rabindranath Tagore", ["Bankim Chandra Chatterjee", "Sarojini Naidu", "Muhammad Iqbal"]],
  ["History", "On which date did the Indian Constitution come into effect?", "26 January 1950", ["15 August 1947", "26 November 1949", "2 October 1950"]],
  ["History", "Who is known as the Father of the Indian Constitution?", "B. R. Ambedkar", ["Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel"]],
  ["History", "Who was the first President of India?", "Dr. Rajendra Prasad", ["Dr. S. Radhakrishnan", "Dr. Zakir Husain", "Jawaharlal Nehru"]],

  ["English", "Which word is a synonym of 'happy'?", "Joyful", ["Gloomy", "Angry", "Tired"]],
  ["English", "What is the plural of 'child'?", "Children", ["Childs", "Childes", "Childrens"]],
  ["English", "Who wrote 'Romeo and Juliet'?", "William Shakespeare", ["Charles Dickens", "Jane Austen", "Mark Twain"]],
  ["English", "Which of these words is an adjective?", "Beautiful", ["Quickly", "Run", "Table"]],

  ["General Knowledge", "Which planet is known as the Red Planet?", "Mars", ["Venus", "Jupiter", "Saturn"]],
  ["General Knowledge", "Which is the largest planet in our solar system?", "Jupiter", ["Saturn", "Neptune", "Earth"]],
  ["General Knowledge", "How many continents are there?", "7", ["5", "6", "8"]],
  ["General Knowledge", "What is the national animal of India?", "Tiger", ["Lion", "Elephant", "Leopard"]],
  ["General Knowledge", "Who is known as the Missile Man of India?", "A. P. J. Abdul Kalam", ["Vikram Sarabhai", "Homi Bhabha", "C. V. Raman"]],
  ["General Knowledge", "Which country hosted the 2024 Summer Olympics?", "France", ["Japan", "USA", "Brazil"]],
  ["General Knowledge", "What is the currency of Japan?", "Yen", ["Won", "Yuan", "Dollar"]],
  ["General Knowledge", "Which organisation launched Chandrayaan-3?", "ISRO", ["NASA", "DRDO", "ESA"]]
];

const COUNTS = [5, 10, 20, "all", "endless"];

let S = [];
let i = 0, score = 0, streak = 0, answered = 0;
let checked = false;
let want = 10;
let by = {};
let endless = false;
let qpool = [];
let bank = [];
let gens = [];
let seen = new Set();

const $ = id => document.getElementById(id);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

function replay(el, cls) {
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}

function shuffle(list) {
  const a = list.slice();
  for (let n = a.length - 1; n > 0; n--) {
    const k = Math.floor(Math.random() * (n + 1));
    [a[n], a[k]] = [a[k], a[n]];
  }
  return a;
}


function wrongNums(c, fmt) {
  fmt = fmt || String;
  const out = [];
  shuffle([1, -1, 2, -2, 10, -10, 3, -3, 5, -5]).forEach(o => {
    const v = c + o;
    if (v > 0 && out.length < 3) out.push(fmt(v));
  });
  return out;
}

function numQ(subject, text, c, fmt) {
  fmt = fmt || String;
  return [subject, text, fmt(c), wrongNums(c, fmt)];
}

const MATHS_GENS = [
  () => { const a = rint(10, 99), b = rint(10, 99); return numQ("Maths", "What is " + a + " + " + b + "?", a + b); },
  () => { const a = rint(20, 99), b = rint(1, a - 1); return numQ("Maths", "What is " + a + " - " + b + "?", a - b); },
  () => { const a = rint(2, 15), b = rint(2, 12); return numQ("Maths", "What is " + a + " x " + b + "?", a * b); },
  () => { const p = [5, 10, 15, 20, 25, 30, 50][rint(0, 6)], n = rint(1, 20) * 20; return numQ("Maths", "What is " + p + "% of " + n + "?", p * n / 100); },
  () => { const a = rint(2, 20); return numQ("Maths", "What is " + a + " squared?", a * a); },
  () => { const a = rint(2, 20); return numQ("Maths", "What is the square root of " + a * a + "?", a); },
  () => { const x = rint(2, 12), a = rint(2, 9), b = rint(1, 20); return numQ("Maths", "If " + a + "x + " + b + " = " + (a * x + b) + ", what is x?", x); }
];

const COMP_GENS = [
  () => { const n = rint(1, 63); return numQ("Computers", "What is the decimal number " + n + " in binary?", n, v => v.toString(2)); },
  () => { const n = rint(1, 63); return numQ("Computers", "What is the binary number " + n.toString(2) + " in decimal?", n); },
  () => { const n = rint(10, 255); return numQ("Computers", "What is the decimal number " + n + " in hexadecimal?", n, v => v.toString(16).toUpperCase()); },
  () => { const n = rint(2, 16); return numQ("Computers", "How many bits are in " + n + " bytes?", n * 8); }
];

function gensFor(subject) {
  if (subject === "all") return MATHS_GENS.concat(COMP_GENS);
  if (subject === "Maths") return MATHS_GENS;
  if (subject === "Computers") return COMP_GENS;
  return [];
}

function nextEndless() {
  if (gens.length && Math.random() < 0.5) {
    let q;
    for (let t = 0; t < 15; t++) {
      q = gens[rint(0, gens.length - 1)]();
      if (!seen.has(q[1])) break;
    }
    seen.add(q[1]);
    return q;
  }
  if (!bank.length) bank = shuffle(qpool);
  return bank.pop();
}

function progress(n) {
  if (!endless) return n / S.length * 100;
  return n > 0 && n % 10 === 0 ? 100 : (n % 10) * 10;
}

function typeText(el, text) {
  if (reduceMotion) { el.textContent = text; return; }
  let n = 0;
  (function tick() {
    el.textContent = text.slice(0, n++);
    if (n <= text.length) setTimeout(tick, 55);
  })();
}

function floatIcons() {
  const bits = ["0", "1", "01101", "</>", "{ }", "CPU", "RAM", "#", "=>", "10", "&&", "0xFF"];
  for (let n = 0; n < 16; n++) {
    const s = document.createElement("span");
    s.className = "float";
    s.setAttribute("aria-hidden", "true");
    s.textContent = bits[n % bits.length];
    s.style.left = Math.random() * 100 + "vw";
    s.style.fontSize = (16 + Math.random() * 20) + "px";
    s.style.animationDuration = (12 + Math.random() * 14) + "s";
    s.style.animationDelay = (-Math.random() * 20) + "s";
    document.body.appendChild(s);
  }
}

function buildSetup() {
  const subjects = [...new Set(Q.map(q => q[0]))];

  const sel = $("subject");
  sel.innerHTML = "";
  ["All subjects"].concat(subjects).forEach((name, n) => {
    const o = document.createElement("option");
    o.value = n === 0 ? "all" : name;
    o.textContent = name;
    sel.appendChild(o);
  });

  const box = $("counts");
  box.innerHTML = "";
  COUNTS.forEach(n => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (n === want ? " on" : "");
    b.textContent = n === "all" ? "All" : n === "endless" ? "\u221E Endless" : n;
    b.onclick = () => {
      want = n;
      box.querySelectorAll(".chip").forEach(c => c.classList.remove("on"));
      b.classList.add("on");
    };
    box.appendChild(b);
  });
}

function showSetup() {
  $("result").hidden = true;
  $("quiz").hidden = true;
  $("hud").hidden = true;
  $("start").hidden = false;
  $("start").classList.remove("leave");
  $("first").hidden = true;
  $("nomsg").textContent = "";
  $("setup").hidden = false;
  replay($("setup"), "enter");
}

function startGame() {
  const subject = $("subject").value;
  qpool = subject === "all" ? Q : Q.filter(q => q[0] === subject);
  endless = want === "endless";

  i = 0;
  score = 0;
  streak = 0;
  answered = 0;
  by = {};
  seen = new Set();
  bank = [];

  if (endless) {
    gens = gensFor(subject);
    S = [];
  } else {
    const total = want === "all" ? qpool.length : Math.min(want, qpool.length);
    S = shuffle(qpool).slice(0, total);
  }

  $("start").hidden = true;
  $("result").hidden = true;
  $("hud").hidden = false;
  render();
}

$("yes").onclick = () => {
  $("start").classList.add("leave");
  setTimeout(() => {
    $("start").classList.remove("leave");
    $("first").hidden = true;
    $("setup").hidden = false;
    replay($("setup"), "enter");
  }, reduceMotion ? 0 : 300);
};

$("no").onclick = () => {
  $("nomsg").textContent = "No worries! I'll be here if you change your mind :)";
  replay($("no"), "wobble");
};

$("begin").onclick = startGame;

function render() {
  if (!endless && i >= S.length) return showResult();
  if (endless && i >= S.length) S.push(nextEndless());
  const [subject, text, correct, wrong] = S[i];

  $("result").hidden = true;
  $("quiz").hidden = false;
  $("count").textContent = "Question " + (i + 1) + (endless ? "" : " of " + S.length) + " (" + subject + ")";
  $("score-live").textContent = "Score: " + score;
  $("fill").style.width = progress(i) + "%";
  $("q").textContent = text;
  $("fb").textContent = "";
  $("fb").className = "";
  $("go").hidden = true;
  $("stop").hidden = !endless;
  checked = false;

  const box = $("opts");
  box.innerHTML = "";
  shuffle(wrong.concat(correct)).forEach((option, n) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "opt";
    b.textContent = "abcd"[n] + ") " + option;
    b.dataset.value = option;
    b.onclick = () => pick(b);
    box.appendChild(b);
  });

  replay($("quiz"), "enter");
}

function pick(btn) {
  if (checked) return;
  checked = true;
  answered++;

  const [subject, , correct] = S[i];
  const ok = btn.dataset.value === correct;
  const fb = $("fb");

  document.querySelectorAll("#opts .opt").forEach(b => {
    b.disabled = true;
    if (b.dataset.value === correct) b.classList.add("right");
  });
  if (!ok) btn.classList.add("wrong");

  const row = by[subject] || [0, 0];
  by[subject] = [row[0] + (ok ? 1 : 0), row[1] + 1];

  if (ok) {
    score++;
    streak++;
    fb.textContent = "correct!" + (streak >= 3 ? " " + streak + " in a row, keep going!" : "");
    $("score-live").textContent = "Score: " + score;
    replay($("score-live"), "bump");
  } else {
    streak = 0;
    fb.textContent = "incorrect! the answer is " + correct;
  }
  fb.className = ok ? "ok" : "bad";
  replay(fb, "pop");

  $("fill").style.width = progress(i + 1) + "%";
  $("go").textContent = !endless && i === S.length - 1 ? "see results" : "next question";
  $("go").hidden = false;
  $("go").focus();
}

document.addEventListener("keydown", e => {
  if ($("quiz").hidden || checked || e.ctrlKey || e.metaKey || e.altKey) return;
  const n = "abcd".indexOf(e.key.toLowerCase());
  const btn = document.querySelectorAll("#opts .opt")[n];
  if (n > -1 && btn) pick(btn);
});

$("go").onclick = () => { i++; render(); };
$("stop").onclick = showResult;

function showResult() {
  $("quiz").hidden = true;
  $("result").hidden = false;
  replay($("result"), "enter");
  $("count").textContent = "Done";
  $("fill").style.width = "100%";

  const n = answered;
  $("summary").textContent = n
    ? "you got " + score + " out of " + n + " correct!"
    : "you did not answer any questions.";

  const target = n ? score / n * 100 : 0;
  const start = performance.now();
  (function step(t) {
    const p = Math.min((t - start) / 900, 1);
    $("pct").textContent = (target * p).toFixed(1) + "%";
    if (p < 1) requestAnimationFrame(step);
  })(start);

  $("msg").textContent =
    !n ? "play again when you're ready!" :
    score === n ? "perfect score!" :
    target >= 90 ? "outstanding!" :
    target >= 60 ? "nice work!" : "keep practising!";

  const list = $("by");
  list.innerHTML = "";
  Object.keys(by).forEach(name => {
    const li = document.createElement("li");
    const a = document.createElement("span");
    const b = document.createElement("span");
    a.textContent = name;
    b.textContent = by[name][0] + "/" + by[name][1];
    li.append(a, b);
    list.appendChild(li);
  });

  if (n > 0 && score === n) confetti();
}

function confetti() {
  if (reduceMotion) return;
  const colors = ["#fff44f", "#ff1493", "#0047ab", "#ffffff", "#ff7ac0"];
  for (let n = 0; n < 60; n++) {
    const s = document.createElement("span");
    s.className = "confetti";
    s.setAttribute("aria-hidden", "true");
    s.style.left = Math.random() * 100 + "vw";
    s.style.background = colors[n % colors.length];
    s.style.animationDuration = (2 + Math.random() * 2) + "s";
    s.style.animationDelay = (Math.random() * 0.6) + "s";
    s.addEventListener("animationend", () => s.remove());
    document.body.appendChild(s);
  }
}

$("again").onclick = startGame;
$("menu").onclick = showSetup;

buildSetup();
typeText($("ask"), "Would you like to play?");
floatIcons();