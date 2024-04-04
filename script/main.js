const clouds = document.querySelectorAll('.cloud'),
    fantasy = document.querySelector('.fantasy'),
    boat = document.querySelector('.boat');

window.addEventListener('scroll', () => {
    let y = window.scrollY;
    let boatSpeed = boat.getAttribute("data-speed");
    boat.style.transform = `translateX(${y * boatSpeed}px)`;
    clouds.forEach(function (el) {
        let speed = el.getAttribute('data-speed')
        let x = window.scrollY
        el.style.transform = `translateX(${x * speed}px)`
    })
});


const title = document.querySelector('.header__title');
const text = title.innerHTML
title.innerHTML = ''

function type(i = 0) {
    title.innerHTML += text[i]
    i++
    if (i < text.length) {
        setTimeout(() => {
            type(i)
        }, 100);
    }
}
type()

const paralaxBox = document.querySelector('.paralax__box'),
    layer = document.querySelectorAll('.layer');
paralaxBox.addEventListener("mousemove", function (e) {
    let x = (e.pageX + window.innerWidth) / 50,
        y = (e.pageY + window.innerHeight) / 50
    layer.forEach(function (el) {
        let speed = el.getAttribute("data-speed")
        el.style.transform = `translate(${x * speed}px,${y * speed}px)`
    })
})

const timer = document.querySelector(".timer"),
    timerNum = document.querySelectorAll('.timer__num');
window.addEventListener('scroll', function scrollCount() {
    if (window.scrollY + window.innerHeight >= timer.offsetTop) {
        timerNum.forEach(el => {
            let dataTimer = el.getAttribute('data-timer')
            console.log(dataTimer);
            timerCount(el, dataTimer)
        })
        this.window.removeEventListener('scroll', scrollCount)
    }
})

function timerCount(el, count, i = 0) {
    el.innerHTML = i
    i++
    if (i <= count) {
        setTimeout(() => {
            timerCount(el, count, i)
        }, 1000);
    }
}

const add = document.querySelector('.to-do__add'),
    input = document.querySelector(".to-do__inp"),
    form = document.querySelector(".to-do__form"),
    list = document.querySelector(".to-do__list");
form.addEventListener('submit', function toDo(e) {
    e.preventDefault();
    if (input.value != " ") {
        addNote();
    }
});
function addNote() {
    const htmlElement = document.createElement('li')
    list.append(htmlElement);
    htmlElement.innerHTML = input.value
    htmlElement.classList.add('to-do__item');
    const elBtn = document.createElement("button");
    htmlElement.append(elBtn);
    elBtn.textContent = "X"
    input.value = " "
    elBtn.classList.add('close');
}
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("close")) {
        let item = e.target.closest(".to-do__item")
        item.remove()
    }
});

