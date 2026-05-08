const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');

const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');


// ЕСЛИ НАЖАЛИ НЕТ
noBtn.addEventListener('click', () => {

    wrapper.innerHTML = `

    <div class="card">
        <div class="meme">
            Көресіңдерғо енді, жас емессіңдер! 😎
        </div>
    </div>

    `;

});


// УБЕГАЮЩАЯ КНОПКА ДА
function moveYesButton() {

    const yesBtnRect = yesBtn.getBoundingClientRect();

    const maxX = window.innerWidth - yesBtnRect.width;
    const maxY = window.innerHeight - yesBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    yesBtn.style.position = 'absolute';
    yesBtn.style.left = randomX + 'px';
    yesBtn.style.top = randomY + 'px';
}


// ПК
yesBtn.addEventListener('mouseover', moveYesButton);


// ТЕЛЕФОН
yesBtn.addEventListener('touchstart', (e) => {

    e.preventDefault();

    moveYesButton();

});