// --- МОДАЛЬНЫЕ ОКНА ---
function setupModals() {
    // Регистрация
    var signupModal = document.getElementById("signupModal");
    var signUpBtn = document.getElementById("signUpBtn");
    var closeSignupModal = document.getElementById("closeModal");
    var signupForm = document.getElementById("signupForm");
    // Вход
    var loginModal = document.getElementById("loginModal");
    var loginBtn = document.querySelector(".log-in");
    var closeLoginModal = document.getElementById("closeLoginModal");
    var loginForm = document.getElementById("loginForm");
    // Открытие модального окна регистрации
    signUpBtn === null || signUpBtn === void 0 ? void 0 : signUpBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (signupModal)
            signupModal.style.display = "block";
    });
    // Закрытие модального окна регистрации
    closeSignupModal === null || closeSignupModal === void 0 ? void 0 : closeSignupModal.addEventListener("click", function () {
        if (signupModal)
            signupModal.style.display = "none";
    });
    // Обработка отправки формы регистрации
    signupForm === null || signupForm === void 0 ? void 0 : signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Регистрация успешно выполнена!");
    });
    // Открытие модального окна входа
    loginBtn === null || loginBtn === void 0 ? void 0 : loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (loginModal)
            loginModal.style.display = "block";
    });
    // Закрытие модального окна входа
    closeLoginModal === null || closeLoginModal === void 0 ? void 0 : closeLoginModal.addEventListener("click", function () {
        if (loginModal)
            loginModal.style.display = "none";
    });
    // Обработка отправки формы входа
    loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Вход выполнен успешно!");
    });
    // Закрытие модальных окон при клике вне них
    window.addEventListener("click", function (event) {
        if (event.target === signupModal && signupModal) {
            signupModal.style.display = "none";
        }
        if (event.target === loginModal && loginModal) {
            loginModal.style.display = "none";
        }
    });
}
// --- ПРЕЛОАДЕР ---
window.addEventListener("load", function () {
    var preloader = document.getElementById('preloader');
    if (preloader)
        preloader.style.display = 'none';
    setupModals();
    // Здесь можно вызвать другие функции инициализации
});
// --- СЛАЙДЕР ---
var currentSlide = 0;
var slides = document.querySelectorAll('.hero-image');
var totalSlides = slides.length;
function showSlide(index) {
    slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === index);
    });
}
function changeSlide(direction) {
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
function generateCards(cards) {
    var container = document.getElementById('features-container');
    if (!container) {
        console.error('Элемент с id "features-container" не найден');
        return;
    }
    cards.forEach(function (card) {
        var _a;
        var cardHTML = "\n      <div class=\"feature\" onclick=\"updateImage('".concat((_a = card.image) !== null && _a !== void 0 ? _a : '', "')\">\n        <hr class=\"thick-line\">\n        <h3>").concat(card.card_name, "</h3>\n        <p>").concat(card.card_text, "</p>\n      </div>\n    ");
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}
// Пример функции updateImage (если она нужна)
function updateImage(imageUrl) {
    // Реализуйте логику обновления изображения
    console.log("Обновить изображение на:", imageUrl);
}
// Загрузка данных и генерация карточек
fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(function (response) { return response.json(); })
    .then(function (json) {
    var cards = json.map(function (comment, index) { return ({
        card_name: "Comment ".concat(index + 1),
        card_text: comment.body,
        // image: comment.image, // если есть поле image
    }); });
    generateCards(cards);
});
