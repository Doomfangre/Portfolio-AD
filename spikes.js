document.getElementById("domer").addEventListener("click", inde);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("call").addEventListener("click", call);
document.getElementById("portu").addEventListener("click", port);
const s2 = document.querySelector('#s2');
const s1 = document.querySelector('#s1');
const grey2 = document.querySelector('#grey2');
const grey1 = document.querySelector('#grey1');

function port(){
    document.getElementById("berg").style.position = `fixed`;
    document.getElementById("bottom").style.position = `fixed`;
    document.getElementById("berg").style.animationName = `bergy`;
    document.getElementById("bottom").style.animationName = `nottop`;
    setTimeout(() => {
        window.location.href = "Port.html";
    }, 1200);
}

function inde(){
    s2.classList.toggle('is-reversed');
    s1.classList.toggle('is-reversed');
    grey2.classList.toggle('is-reversed');
    grey1.classList.toggle('is-reversed');
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1200);
}

function pause(){
    s2.classList.toggle('is-reversed');
    s1.classList.toggle('is-reversed');
    grey2.classList.toggle('is-reversed');
    grey1.classList.toggle('is-reversed');
    setTimeout(() => {
        window.location.href = "Resume.html";
    }, 1200);
}

function call(){
    s2.classList.toggle('is-reversed');
    s1.classList.toggle('is-reversed');
    grey2.classList.toggle('is-reversed');
    grey1.classList.toggle('is-reversed');
    setTimeout(() => {
        window.location.href = "Contact.html";
    }, 1200);
}