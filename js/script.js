let largura = 0;
let altura = 0;

function randomSize() {
    largura = window.innerWidth;
    altura = window.innerHeight;
}

function randomBall() {
    let x = Math.round(Math.random() * largura) - 50;
    let y = Math.round(Math.random() * altura) - 50;

    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;

    let ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.position = 'absolute';
    ball.style.background = randomColor();
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    ball.onclick = function() {
        this.remove();
    }

    document.body.append(ball);
}

function randomColor() {
    let color = Math.round(Math.random() * 3);
    switch (color) {
        case 0:
            return '#009641';
        case 1:
            return '#FFCA00';
        case 2:
            return '#302680';
        case 3:
            return '#FBFEFC';
    }
}

function getHours() {
    let date = new Date();

    document.querySelector('.hours').innerHTML = date.getHours();
    document.querySelector('.minutes').innerHTML = date.getMinutes();
    document.querySelector('.seconds').innerHTML = date.getSeconds();
}

window.addEventListener('load', () => {
    setInterval(getHours, 1000);
    setInterval(randomBall, 1000);
});


randomSize();