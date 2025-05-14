//OKNO
// Получаем элементы модального окна и кнопки
var modal = document.getElementById("signupModal");
var btn = document.getElementById("signUpBtn");
var span = document.getElementById("closeModal");

// Когда пользователь нажимает на кнопку "Sign Up", открываем модальное окно
btn.onclick = function(event) {
event.preventDefault(); // Предотвращаем переход по ссылке
modal.style.display = "block";
}

// Когда пользователь нажимает на (x), закрываем модальное окно
span.onclick = function() {
modal.style.display = "none";
}

// Когда пользователь кликает в любом месте вне модального окна, закрываем его
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

// Обработка отправки формы
document.getElementById("signupForm").onsubmit = function(event) {
event.preventDefault(); // Предотвращаем стандартное поведение формы
alert("Регистрация успешно выполнена!"); // Здесь можно добавить свою логику
};

// Получаем элементы модального окна входа и кнопки
var loginModal = document.getElementById("loginModal");
var loginBtn = document.querySelector(".log-in"); // Используем querySelector, т.к. getElementById не подойдет
var closeLoginModal = document.getElementById("closeLoginModal");

// Когда пользователь нажимает на кнопку "Log In", открываем модальное окно
loginBtn.onclick = function(event) {
event.preventDefault(); // Предотвращаем переход по ссылке
loginModal.style.display = "block";
}

// Когда пользователь нажимает на (x), закрываем модальное окно
closeLoginModal.onclick = function() {
loginModal.style.display = "none";
}

// Когда пользователь кликает в любом месте вне модального окна, закрываем его
window.onclick = function(event) {
if (event.target == loginModal) {
loginModal.style.display = "none";
}
}

// Обработка отправки формы входа
document.getElementById("loginForm").onsubmit = function(event) {
event.preventDefault(); // Предотвращаем стандартное поведение формы
alert("Вход выполнен успешно!"); // Здесь можно добавить свою логику
// В реальном приложении здесь будет отправка данных на сервер и обработка ответа
};



//PRELOADER
// Preloader
window.addEventListener('load', function() {
document.getElementById('preloader').style.display = 'none';



// --- Ваш существующий JavaScript код (модальные окна, слайдер и т.д.) ---
// Получаем элементы модального окна и кнопки
var modal = document.getElementById("signupModal");
var btn = document.getElementById("signUpBtn");
var span = document.getElementById("closeModal");

// Когда пользователь нажимает на кнопку "Sign Up", открываем модальное окно
btn.onclick = function(event) {
event.preventDefault(); // Предотвращаем переход по ссылке
modal.style.display = "block";
}

// Когда пользователь нажимает на (x), закрываем модальное окно
span.onclick = function() {
modal.style.display = "none";
}

// Когда пользователь кликает в любом месте вне модального окна, закрываем его
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

// Обработка отправки формы
document.getElementById("signupForm").onsubmit = function(event) {
event.preventDefault(); // Предотвращаем стандартное поведение формы
alert("Регистрация успешно выполнена!"); // Здесь можно добавить свою логику
};

// Получаем элементы модального окна входа и кнопки
var loginModal = document.getElementById("loginModal");
var loginBtn = document.querySelector(".log-in"); // Используем querySelector, т.к. getElementById не подойдет
var closeLoginModal = document.getElementById("closeLoginModal");

// Когда пользователь нажимает на кнопку "Log In", открываем модальное окно
loginBtn.onclick = function(event) {
event.preventDefault(); // Предотвращаем переход по ссылке
loginModal.style.display = "block";
}

// Когда пользователь нажимает на (x), закрываем модальное окно
closeLoginModal.onclick = function() {
loginModal.style.display = "none";
}

// Когда пользователь кликает в любом месте вне модального окна, закрываем его
window.onclick = function(event) {
if (event.target == loginModal) {
loginModal.style.display = "none";
}
}

// Обработка отправки формы входа
document.getElementById("loginForm").onsubmit = function(event) {
event.preventDefault(); // Предотвращаем стандартное поведение формы
alert("Вход выполнен успешно!"); // Здесь можно добавить свою логику
// В реальном приложении здесь будет отправка данных на сервер и обработка ответа
};

});




///SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-image');
const totalSlides = slides.length;

// Функция для отображения текущего слайда
function showSlide(index) {
slides.forEach((slide, i) => {
slide.classList.remove('active');
if (i === index) {
slide.classList.add('active');
}
});
}

// Функция для изменения слайда
function changeSlide(direction) {
currentSlide += direction;

if (currentSlide < 0) {
currentSlide = totalSlides - 1; // Переход к последнему слайду
} else if (currentSlide >= totalSlides) {
currentSlide = 0; // Переход к первому слайду
}

showSlide(currentSlide);
}

// Автоматическое переключение слайдов
function autoChangeSlide() {
changeSlide(1); // Переключаем на следующий слайд
}

// Инициализация первого слайда
showSlide(currentSlide);

// Устанавливаем интервал для автоматического переключения слайдов (например, каждые 3 секунды)
setInterval(autoChangeSlide, 3000);




///задания 3
function generateCards(cards) {
const container = document.getElementById('features-container');

if (!container) {
console.error('Элемент с id "features-container" не найден');
return;
}

Object.keys(cards).forEach(key => {

const card = cards[key];
console.log(card);
const cardHTML = `
<div class="feature" onclick="updateImage('${card.image}')">
<hr class="thick-line">
<h3>${card.card_name}</h3>
<p>${card.card_text}</p>
</div>
`;
container.insertAdjacentHTML('beforeend', cardHTML);
});
}


fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
.then(response => response.json())
.then(json => {
console.log(json);

const cards = json.map((comment, index) => ({
card_name: `Comment ${index+1}`,
card_text: comment.body,
}))
generateCards(cards);
})