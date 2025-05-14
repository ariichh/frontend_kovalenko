// Типы для карточек
type Card = {
  card_name: string;
  card_text: string;
  image?: string;
};

// --- МОДАЛЬНЫЕ ОКНА ---

function setupModals() {
  // Регистрация
  const signupModal = document.getElementById("signupModal") as HTMLElement | null;
  const signUpBtn = document.getElementById("signUpBtn") as HTMLElement | null;
  const closeSignupModal = document.getElementById("closeModal") as HTMLElement | null;
  const signupForm = document.getElementById("signupForm") as HTMLFormElement | null;

  // Вход
  const loginModal = document.getElementById("loginModal") as HTMLElement | null;
  const loginBtn = document.querySelector(".log-in") as HTMLElement | null;
  const closeLoginModal = document.getElementById("closeLoginModal") as HTMLElement | null;
  const loginForm = document.getElementById("loginForm") as HTMLFormElement | null;

  // Открытие модального окна регистрации
  signUpBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    if (signupModal) signupModal.style.display = "block";
  });

  // Закрытие модального окна регистрации
  closeSignupModal?.addEventListener("click", () => {
    if (signupModal) signupModal.style.display = "none";
  });

  // Обработка отправки формы регистрации
  signupForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Регистрация успешно выполнена!");
  });

  // Открытие модального окна входа
  loginBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    if (loginModal) loginModal.style.display = "block";
  });

  // Закрытие модального окна входа
  closeLoginModal?.addEventListener("click", () => {
    if (loginModal) loginModal.style.display = "none";
  });

  // Обработка отправки формы входа
  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Вход выполнен успешно!");
  });

  // Закрытие модальных окон при клике вне них
  window.addEventListener("click", (event: MouseEvent) => {
    if (event.target === signupModal && signupModal) {
      signupModal.style.display = "none";
    }
    if (event.target === loginModal && loginModal) {
      loginModal.style.display = "none";
    }
  });
}

// --- ПРЕЛОАДЕР ---

window.addEventListener("load", () => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.style.display = 'none';

  setupModals();
  // Здесь можно вызвать другие функции инициализации
});

// --- СЛАЙДЕР ---

let currentSlide = 0;
const slides = document.querySelectorAll<HTMLElement>('.hero-image');
const totalSlides = slides.length;

function showSlide(index: number) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function changeSlide(direction: number) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function autoChangeSlide() {
  changeSlide(1);
}

if (totalSlides > 0) {
  showSlide(currentSlide);
  setInterval(autoChangeSlide, 3000);
}

// --- КАРТОЧКИ ---

function generateCards(cards: Card[]) {
  const container = document.getElementById('features-container');
  if (!container) {
    console.error('Элемент с id "features-container" не найден');
    return;
  }

  cards.forEach(card => {
    const cardHTML = `
      <div class="feature" onclick="updateImage('${card.image ?? ''}')">
        <hr class="thick-line">
        <h3>${card.card_name}</h3>
        <p>${card.card_text}</p>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Пример функции updateImage (если она нужна)
function updateImage(imageUrl: string) {
  // Реализуйте логику обновления изображения
  console.log("Обновить изображение на:", imageUrl);
}

// Загрузка данных и генерация карточек
fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  .then(response => response.json())
  .then((json: any[]) => {
    const cards: Card[] = json.map((comment, index) => ({
      card_name: `Comment ${index + 1}`,
      card_text: comment.body,
      // image: comment.image, // если есть поле image
    }));
    generateCards(cards);
  });
