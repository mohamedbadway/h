// ===== HERO SLIDER =====
const slides = document.querySelectorAll(".hero-slide");
const nextBtn = document.querySelector(".hero-next");
const prevBtn = document.querySelector(".hero-prev");
const dotsContainer = document.querySelector(".hero-dots");

let currentSlide = 0;

// إنشاء الدوتس تلقائي
slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(index));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// أزرار التالي والسابق
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// سلايدر تلقائي كل 5 ثواني
setInterval(nextSlide, 5000);

// ===== MOBILE HAMBURGER =====
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".main-nav ul");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

/* إضافة CSS للعرض عند النقر في JS */
const style = document.createElement('style');
style.innerHTML = `
.main-nav ul.show { display: flex; flex-direction: column; background: #fff; position: absolute; top: 60px; right: 0; width: 200px; padding: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
`;
document.head.appendChild(style);

// ===== FORM SUBMISSION ALERTS =====
// حجز المصعد
const bookingForm = document.querySelector(".booking-form");
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("تم استلام طلب الحجز بنجاح! سيتواصل معك فريقنا قريبًا.");
  bookingForm.reset();
});

// فورم التواصل
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.");
  contactForm.reset();
});

