document.getElementById("domer").addEventListener("click", inde);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("call").addEventListener("click", call);
document.getElementById("portu").addEventListener("click", port);
const s2 = document.querySelector('#s2');
const s1 = document.querySelector('#s1');
const grey2 = document.querySelector('#grey2');
const grey1 = document.querySelector('#grey1');

function port(){
    document.getElementById("s1").style.visibility = `visible`;
    document.getElementById("s2").style.visibility = `visible`;
    document.getElementById("grey1").style.visibility = `visible`;
    document.getElementById("grey2").style.visibility = `visible`;
    setTimeout(() => {
        window.location.href = "Port.html";
    }, 1200);
}

function inde(){
    document.getElementById("s1").style.visibility = `visible`;
    document.getElementById("s2").style.visibility = `visible`;
    document.getElementById("grey1").style.visibility = `visible`;
    document.getElementById("grey2").style.visibility = `visible`;
    s2.classList.toggle('is-reversed');
    s1.classList.toggle('is-reversed');
    grey2.classList.toggle('is-reversed');
    grey1.classList.toggle('is-reversed');
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1200);
}

function pause(){
    document.getElementById("s1").style.visibility = `visible`;
    document.getElementById("s2").style.visibility = `visible`;
    document.getElementById("grey1").style.visibility = `visible`;
    document.getElementById("grey2").style.visibility = `visible`;
    s2.classList.toggle('is-reversed');
    s1.classList.toggle('is-reversed');
    grey2.classList.toggle('is-reversed');
    grey1.classList.toggle('is-reversed');
    setTimeout(() => {
        window.location.href = "Resume.html";
    }, 1200);
}

function call(){
    document.getElementById("s1").style.visibility = `visible`;
    document.getElementById("s2").style.visibility = `visible`;
    document.getElementById("grey1").style.visibility = `visible`;
    document.getElementById("grey2").style.visibility = `visible`;
    s2.classList.toggle('is-reversed');
    s1.classList.toggle('is-reversed');
    grey2.classList.toggle('is-reversed');
    grey1.classList.toggle('is-reversed');
    setTimeout(() => {
        window.location.href = "Contact.html";
    }, 1200);
}