const cube = document.getElementById('cube');
const cube2 = document.getElementById('cube2');
const cube3 = document.getElementById('cube3');
const result = document.getElementById('result');
const play = document.getElementById('play');
const ez = document.getElementById('ez');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');
const insane = document.getElementById('insane');

let timer = false;
let timer2 = false;
let timer3 = false;
let on = false;
let body = 0;
let hod;
let hod2;
let hod3;
let pocethodu = 0;
let speed = 300;
let dif = 2;

function animace() {
    hod = Math.ceil(Math.random() * 6);
    cube.src = `img/kostka${hod}.png`;
}

function animace2() {
    hod2 = Math.ceil(Math.random() * 6);
    cube2.src = `img/kostka${hod2}.png`;
}

function animace3() {
    hod3 = Math.ceil(Math.random() * 6);
    cube3.src = `img/kostka${hod3}.png`;
}

play.addEventListener('click', () => {
    if (timer == false && !on) {
        timer = setInterval(animace, speed);
        play.innerHTML = 'Stop';
        on = true;
    } else if (timer) {
        clearInterval(timer);
        timer = false;
        timer2 = setInterval(animace2, speed);
    } else if (timer2) {
        clearInterval(timer2);
        timer2 = false;
        timer3 = setInterval(animace3, speed);
    }
    else {
        clearInterval(timer3);
        timer3 = false;
        pocethodu++;
        bodyy();
        result.innerHTML = statistika();
        play.innerText = 'Play again';
        on = false;
    }
});

ez.addEventListener('click', () => {
    if(on == false && dif != 1){
        body = 0;
        speed = 500;
        dif = 1;
        result.innerHTML = statistika();
    }
})

normal.addEventListener('click', () => {
    if(on == false && dif != 2){
        body = 0;
        speed = 300;
        dif = 2;
        result.innerHTML = statistika();
    }
})

hard.addEventListener('click', () => {
    if(on == false && dif != 3){
        body = 0;
        speed = 100;
        dif = 3;
        result.innerHTML = statistika();
    }
})

insane.addEventListener('click', () => {
    if(on == false && dif != 4){
        body = 0;
        speed = 1;
        dif = 4;
        result.innerHTML = statistika();
    }
})

function bodyy() {
    if(hod == hod2 && hod == hod3) {
        body += 3;
    } else if(hod == hod2 || hod2 == hod3 || hod == hod3) {
        body += 2;
    } else {
        body -= 1;
    }
}

function statistika() {
    let vysledek;
    vysledek = `<p>Number of throws: ${pocethodu}</p>`;
    vysledek += `<p>Points: ${body}</p>`;
    return vysledek;
}
